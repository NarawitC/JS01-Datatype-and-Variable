let a = 1;
// a=1

let b = 2;
// a=1 b=2

let c = a++;
// a=2 b=2 c=1

let d = ++c;
// a=2 b=2 c=2 d=2

let e = ++d + d++ + d;
// a=2 b=2 c=2 d=4 e=10
