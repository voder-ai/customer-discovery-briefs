#!/usr/bin/env npx tsx
/**
 * Copy QA Tool: LLM-based premortem for landing page and brief content
 * 
 * Checks for:
 * - AI signals (hallucination, AI-generated, machine learning)
 * - Uncommittable quantities (10+, always, guaranteed)
 * - Non-selling features (email delivery, file format)
 * - Quality-questioning language (no fake, not made up)
 * - Over-promises
 */

import { readFileSync, existsSync } from 'fs';
import { parseModelSpec, createProvider } from '../../outreach-qa/src/provider.js';

const QA_PROMPT = `You are a copy editor reviewing marketing content for a B2B service. Your job is to find problems that would make customers hesitate.

CRITICAL ISSUES TO FLAG:

1. **AI Signals** - Anything that reminds readers this might be AI-generated:
   - "hallucination", "hallucinated"
   - "AI-generated", "machine learning", "automated"
   - "not made up", "no fake data" (protesting too much)
   
2. **Uncommittable Quantities** - Promises we might not be able to keep:
   - "10+", "15+", "20+" (what if we only find 5?)
   - "always", "guaranteed", "every time"
   - Specific numbers without evidence
   
3. **Non-Selling Features** - Things that aren't buying motivators:
   - "Email delivery" (how else would you deliver it?)
   - File formats, delivery methods
   - Technical implementation details
   
4. **Quality-Questioning Language** - Defensive language that raises doubts:
   - "real URLs" (implies some are fake)
   - "verified" without saying who verified
   - "no hallucinations" (why would there be?)
   
5. **Over-Promises** - Claims that can't be substantiated:
   - "comprehensive" (by whose standard?)
   - "complete" (how do you know?)
   - "all the threads" (all?)

For each issue found, output:
- LINE: <approximate line or section>
- ISSUE: <category from above>
- TEXT: "<the problematic text>"
- FIX: <suggested replacement>

If the content is clean, say "PASS - no issues found."

CONTENT TO REVIEW:
`;

async function reviewContent(filepath: string): Promise<void> {
  if (!existsSync(filepath)) {
    console.error(`File not found: ${filepath}`);
    process.exit(1);
  }

  const content = readFileSync(filepath, 'utf-8');
  
  // Strip HTML tags for readability
  const textContent = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 8000); // Limit to ~8k chars

  console.log(`\n📋 Reviewing: ${filepath}`);
  console.log('─'.repeat(60));

  try {
    const spec = parseModelSpec('anthropic/claude-sonnet-4-5');
    const provider = await createProvider(spec);

    const result = await provider.send({
      prompt: QA_PROMPT + textContent,
    });

    console.log(result.text);
    console.log('─'.repeat(60));
  } catch (e: any) {
    console.error(`Error: ${e.message}`);
  }
}

async function main() {
  const files = process.argv.slice(2);
  
  if (files.length === 0) {
    // Default: review all key files
    const defaultFiles = [
      'index.html',
      'sample-brief.html',
      'sample-brief-saas.html',
    ];
    
    console.log('🔍 Copy QA Tool - LLM-based premortem');
    console.log('Usage: npx tsx qa-copy.ts [files...]');
    console.log('\nReviewing default files...');
    
    for (const file of defaultFiles) {
      if (existsSync(file)) {
        await reviewContent(file);
      }
    }
  } else {
    for (const file of files) {
      await reviewContent(file);
    }
  }
}

main().catch(console.error);
