cat << 'EOF' > app.test.js
const test = require('node:test');
const assert = require('node:assert');

test('soma simples passa com sucesso', () => {
  assert.strictEqual(1 + 1, 2);
});
EOF