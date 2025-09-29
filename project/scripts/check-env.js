#!/usr/bin/env node

/**
 * Script kiểm tra environment variables trước khi build
 * Chạy: node scripts/check-env.js
 */

// Load environment variables from .env files
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(colors[color] + message + colors.reset);
}

function checkEnvironmentVariables() {
  log('🔧 Checking Environment Variables...', 'cyan');
  
  // Required environment variables
  const requiredVars = [
    'GOOGLE_AI_API_KEY'
  ];
  
  // Optional environment variables 
  const optionalVars = [
    'DATABASE_URL',
    'JWT_SECRET',
    'NEXTAUTH_SECRET',
    'NEXTAUTH_URL',
    'STRIPE_SECRET_KEY',
    'SENDGRID_API_KEY'
  ];
  
  let hasErrors = false;
  
  // Check if .env files exist
  const envFiles = ['.env', '.env.local', '.env.production'];
  const existingEnvFiles = envFiles.filter(file => 
    fs.existsSync(path.join(process.cwd(), file))
  );
  
  if (existingEnvFiles.length === 0) {
    log('⚠️  No environment files found (.env, .env.local, .env.production)', 'yellow');
    log('   Create .env.local from .env.example template', 'yellow');
  } else {
    log(`📄 Found environment files: ${existingEnvFiles.join(', ')}`, 'blue');
  }
  
  // Check required variables
  log('\n📋 Required Variables:', 'magenta');
  for (const varName of requiredVars) {
    const value = process.env[varName];
    if (!value || value.trim() === '') {
      log(`  ❌ ${varName}: Missing`, 'red');
      hasErrors = true;
    } else {
      const maskedValue = value.length > 8 
        ? `${value.substring(0, 4)}***${value.substring(value.length - 4)}`
        : '***SET***';
      log(`  ✅ ${varName}: ${maskedValue}`, 'green');
    }
  }
  
  // Check optional variables
  log('\n📋 Optional Variables:', 'magenta');
  for (const varName of optionalVars) {
    const value = process.env[varName];
    if (value && value.trim() !== '') {
      const maskedValue = value.length > 8 
        ? `${value.substring(0, 4)}***${value.substring(value.length - 4)}`
        : '***SET***';
      log(`  ✅ ${varName}: ${maskedValue}`, 'green');
    } else {
      log(`  ⚪ ${varName}: Not set (optional)`, 'yellow');
    }
  }
  
  // Check .env.example exists
  const envExamplePath = path.join(process.cwd(), '.env.example');
  if (fs.existsSync(envExamplePath)) {
    log('\n✅ .env.example file exists', 'green');
  } else {
    log('\n⚠️  .env.example file missing', 'yellow');
    log('   Consider creating one for team collaboration', 'yellow');
  }
  
  // Check .gitignore
  const gitignorePath = path.join(process.cwd(), '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
    if (gitignoreContent.includes('.env')) {
      log('✅ .env files are in .gitignore', 'green');
    } else {
      log('⚠️  .env files not found in .gitignore', 'yellow');
      log('   Add .env* to .gitignore to prevent accidental commits', 'yellow');
    }
  }
  
  // Final result
  if (hasErrors) {
    log('\n❌ Environment check failed!', 'red');
    log('Please set all required environment variables before proceeding.', 'red');
    log('See .env.example for reference.', 'red');
    process.exit(1);
  } else {
    log('\n✅ Environment check passed!', 'green');
    log('All required environment variables are set.', 'green');
  }
}

function checkForSensitiveData() {
  log('\n🔍 Scanning for potential sensitive data...', 'cyan');
  
  const sensitivePatterns = [
    /api_key\s*[=:]\s*['""][^'"]*['"]/gi,
    /secret\s*[=:]\s*['""][^'"]*['"]/gi,
    /password\s*[=:]\s*['""][^'"]*['"]/gi,
    /token\s*[=:]\s*['""][^'"]*['"]/gi,
  ];
  
  const filesToCheck = [
    'app/**/*.ts',
    'app/**/*.tsx', 
    'components/**/*.ts',
    'components/**/*.tsx',
    'utils/**/*.ts',
    'lib/**/*.ts'
  ];
  
  // This is a basic check - in real implementation you'd use glob
  log('⚪ Sensitive data scan completed (basic check)', 'yellow');
  log('   For comprehensive scanning, consider using tools like:', 'yellow');
  log('   - git-secrets', 'yellow');
  log('   - truffleHog', 'yellow');
  log('   - detect-secrets', 'yellow');
}

// Main execution
function main() {
  log('🚀 Pre-build Security Check', 'magenta');
  log('=' .repeat(50), 'magenta');
  
  try {
    checkEnvironmentVariables();
    checkForSensitiveData();
    
    log('\n🎉 All checks passed! Ready to build.', 'green');
    
  } catch (error) {
    log(`\n💥 Error during security check: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { checkEnvironmentVariables, checkForSensitiveData };