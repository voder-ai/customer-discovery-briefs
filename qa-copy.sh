#!/bin/bash
# Quick copy QA checks - pattern-based (no LLM needed)

echo "🔍 Copy QA Check"
echo "================"

ISSUES=0

# Check for AI signals
echo ""
echo "### AI Signals ###"
if grep -rni "hallucin" *.html 2>/dev/null; then
  echo "  ❌ FOUND: hallucination mentions"
  ((ISSUES++))
fi
if grep -rni "ai-generated\|ai generated\|machine learning" *.html 2>/dev/null; then
  echo "  ❌ FOUND: AI-generated language"
  ((ISSUES++))
fi
if grep -rni "not made.up\|no fake\|not fake" *.html 2>/dev/null; then
  echo "  ❌ FOUND: defensive 'not fake' language"
  ((ISSUES++))
fi

# Check for uncommittable quantities
echo ""
echo "### Uncommittable Quantities ###"
if grep -rniE "[0-9]+\+" *.html 2>/dev/null | grep -v "font-size\|margin\|padding\|width\|height\|@"; then
  echo "  ⚠️  FOUND: quantity promises (10+, 15+, etc.)"
  ((ISSUES++))
fi
if grep -rni "guaranteed\|always\|every time" *.html 2>/dev/null; then
  echo "  ⚠️  FOUND: absolute promises"
  ((ISSUES++))
fi

# Check for non-selling features
echo ""
echo "### Non-Selling Features ###"
if grep -rni "email delivery" *.html 2>/dev/null; then
  echo "  ⚠️  FOUND: 'email delivery' (not a selling point)"
  ((ISSUES++))
fi

# Check for quality-questioning language
echo ""
echo "### Quality-Questioning Language ###"
if grep -rni "real url\|real URLs" *.html 2>/dev/null; then
  echo "  ⚠️  FOUND: 'real URLs' (implies some are fake)"
  ((ISSUES++))
fi
if grep -rni "verified" *.html 2>/dev/null | grep -v "verified threads\|verified, current"; then
  echo "  ⚠️  CHECK: 'verified' claims - ensure they're substantiated"
fi

echo ""
echo "================"
if [ $ISSUES -eq 0 ]; then
  echo "✅ PASS - no critical issues found"
else
  echo "❌ FOUND $ISSUES issue(s) to fix"
fi
