const phoneRegex = /^[+]?[\s0-9()+-]{7,20}$/;

const testCases = [
  {
    name: "Valid phone with spaces and plus",
    phone: "+48 123 456 789",
    expected: true,
  },
  {
    name: "Invalid phone (too short)",
    phone: "123",
    expected: false,
  },
  {
    name: "Invalid phone (too long)",
    phone: "123456789012345678901",
    expected: false,
  },
  {
    name: "Invalid phone (illegal characters)",
    phone: "123-456-789a",
    expected: false,
  },
  {
    name: "Valid phone with parentheses and hyphens",
    phone: "(+48) 123-456-789",
    expected: true,
  },
  {
    name: "Plain number",
    phone: "123456789",
    expected: true,
  },
];

let failed = false;
for (const tc of testCases) {
  const result = phoneRegex.test(tc.phone);
  if (result !== tc.expected) {
    console.error(`FAIL: ${tc.name}. Expected ${tc.expected}, got ${result}`);
    failed = true;
  } else {
    console.log(`PASS: ${tc.name}`);
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log("All regex tests passed!");
}
