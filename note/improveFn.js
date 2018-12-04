/**
 * 尾递归优化
 */

 // 计算阶乘--优化前
 function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5) // 120

//优化后
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

// 计算斐波那契列 --优化前
function Fibonacci (n) {
  if ( n <= 1 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

Fibonacci(10); // 89

// 优化后
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

Fibonacci2(100) // 573147844013817200000
