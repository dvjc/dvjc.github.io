let debt = 23000;
let monthlyPayment = 175;
let items = [
  {
    units: 12,
    retail: 30,
    cost: 0.6
  }
];

const profit = (items) => {
  let p = 0;
  if ( items.length > 0 ) {
    const c = items[0].cost;
    const r = items[0].retail;
    const u = items[0].units;
    p = (c == 0 || u == 0) ? 0 : ((r / u) - c) * u;
  }
  return p;
};

const tithe = (items) => {
  let t = 0;
  if ( items.length > 0 ){
    t = items[0].retail == 0 ? 0 : 0.1 * items[0].retail;
  }
  return t;
};

const singleCupcakeUnit = (items) => {
  let s = 0;
  if ( items.length > 0 ) {
    const c = items[0].cost;
    const r = items[0].retail;
    const u = items[0].units;
    const t = tithe(items);
    s = (c == 0 || u == 0) ? 0 : ((( r - t ) / u) - c);
  }
  return s;
};

const cupcakeTransform = (debt, items) => {
  let ct = 0;
  if ( items.length > 0 ) {
    const s = singleCupcakeUnit(items);
    ct = s == 0 ? 'infinite' : Math.round(0.5 + (debt / s),0);
  }
  let suffix = ct == 1 ? "" : "s";
  ct = `${ ct } cupcake${ suffix }`;
  return ct;
};

const moneyFormat = (value) => {
  let m = 0;
  if (!isNaN(m)){
    m = Math.round(100*value,0)/100;
    if ( m.toString().indexOf(".")<0 ) {
      m = m + ".00";
    } else if ( m.toString().split(".")[1].length == 1) {
      m = m + "0";
    }
     m = "$ " + m;
  }
  return m;
};

var vm = new Vue({
  el: '#sccApplication',
  data: {
    titleLabel: `Simply Carrot Calculator`,
    labelWidth: 6,
    inputControlWidth: 6,
    outputControlWidth: 5,
    debt,
    monthlyPayment,
    items
  },
  methods: {
    profit,
    tithe,
    singleCupcakeUnit,
    cupcakeTransform,
    moneyFormat
  }
      });