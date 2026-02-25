/**
 * Netlify serverless function: compatibility + personal life forecast.
 * Formulas stay on the server and are not exposed to the client.
 * POST body: { p1: { day, month, year }, p2: { day, month, year }, calcYear? }
 * Response: { arkanPlus, arkanMinus, forecast?: { partner1, partner2 } }
 */

function sumDigits(n) {
  const s = String(Math.abs(parseInt(n, 10) || 0));
  return s.replace(/\D/g, '').split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
}

function reduceTo22(n) {
  let x = parseInt(n, 10);
  if (isNaN(x) || x < 1) return 0;
  while (x > 22) x -= 22;
  return x;
}

function to1_22(x) {
  const n = parseInt(x, 10);
  if (isNaN(n)) return 22;
  const r = n % 22;
  return r === 0 ? 22 : r;
}

function nz(v) {
  return v === 0 ? 22 : v;
}

function karmicNodesFromBirthDate(day, month, year) {
  let ac = parseInt(day, 10) || 1;
  if (ac > 22) ac = to1_22(ac);
  const am = Math.min(12, Math.max(1, parseInt(month, 10) || 1));
  const ag = to1_22(sumDigits(year));
  const k1 = nz(Math.abs(ac - am));
  const k2 = nz(Math.abs(ac - ag));
  const k3 = nz(Math.abs(k1 - k2));
  const k4 = nz(Math.abs(am - ag));
  const k5 = to1_22(k1 + k2 + k3 + k4);
  return [k1, k2, k3, k4, k5];
}

function birthBase(day, month, year) {
  const s = sumDigits(day) + sumDigits(month) + sumDigits(year);
  return reduceTo22(s);
}

function inNodes(val, nodes) {
  return nodes.indexOf(parseInt(val, 10)) !== -1;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (_) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const p1 = body.p1 || {};
  const p2 = body.p2 || {};
  const d1 = parseInt(p1.day, 10) || 1;
  const m1 = parseInt(p1.month, 10) || 1;
  const y1 = parseInt(p1.year, 10) || 2000;
  const d2 = parseInt(p2.day, 10) || 1;
  const m2 = parseInt(p2.month, 10) || 1;
  const y2 = parseInt(p2.year, 10) || 2000;
  const calcYear = parseInt(body.calcYear, 10);

  const day1Reduced = reduceTo22(d1);
  const day2Reduced = reduceTo22(d2);
  const arkanPlus = reduceTo22(day1Reduced + day2Reduced);
  const diff = Math.abs(day1Reduced - day2Reduced);
  const arkanMinus = diff === 0 ? 22 : diff;

  const result = { arkanPlus, arkanMinus };

  if (!isNaN(calcYear) && calcYear > 0) {
    const prevYear = calcYear - 1;
    const base1 = birthBase(d1, m1, y1);
    const base2 = birthBase(d2, m2, y2);
    const res1Until = reduceTo22(base1 + sumDigits(prevYear));
    const res1After = reduceTo22(base1 + sumDigits(calcYear));
    const res2Until = reduceTo22(base2 + sumDigits(prevYear));
    const res2After = reduceTo22(base2 + sumDigits(calcYear));
    const nodes1 = karmicNodesFromBirthDate(d1, m1, y1);
    const nodes2 = karmicNodesFromBirthDate(d2, m2, y2);
    result.forecast = {
      partner1: {
        resultUntil: res1Until,
        resultAfter: res1After,
        karmicUntil: inNodes(res1Until, nodes1),
        karmicAfter: inNodes(res1After, nodes1),
      },
      partner2: {
        resultUntil: res2Until,
        resultAfter: res2After,
        karmicUntil: inNodes(res2Until, nodes2),
        karmicAfter: inNodes(res2After, nodes2),
      },
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  };
};
