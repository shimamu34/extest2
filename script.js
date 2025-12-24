// データ定義
const D = {
    male: {
        h: ["握力", "上体起こし", "長座体前屈", "反復横とび", "持久走", "20mシャトルラン", "50m走", "立ち幅跳び", "ハンドボール投げ", "合計"],
        c: [
            {p: 10, 握力: "56以上", 上体: "35以上", 長座: "64以上", 横: "63以上", 持: "4'59\"以下", シ: "125以上", "50m": "6.6以下", 幅: "265以上", ハ: "37以上"},
            {p: 9, 握力: "51~55", 上体: "33~34", 長座: "58~63", 横: "60~62", 持: "5'00\"~5'16\"", シ: "113~124", "50m": "6.7~6.8", 幅: "254~264", ハ: "34~36"},
            {p: 8, 握力: "47~50", 上体: "30~32", 長座: "53~57", 横: "56~59", 持: "5'17\"~5'33\"", シ: "102~112", "50m": "6.9~7.0", 幅: "242~253", ハ: "31~33"},
            {p: 7, 握力: "43~46", 上体: "27~29", 長座: "49~52", 横: "53~55", 持: "5'34\"~5'55\"", シ: "90~101", "50m": "7.1~7.2", 幅: "230~241", ハ: "28~30"},
            {p: 6, 握力: "38~42", 上体: "25~26", 長座: "44~48", 横: "49~52", 持: "5'56\"~6'22\"", シ: "76~89", "50m": "7.3~7.5", 幅: "218~229", ハ: "25~27"},
            {p: 5, 握力: "33~37", 上体: "22~24", 長座: "39~43", 横: "45~48", 持: "6'23\"~6'50\"", シ: "63~75", "50m": "7.6~7.9", 幅: "203~217", ハ: "22~24"},
            {p: 4, 握力: "28~32", 上体: "19~21", 長座: "33~38", 横: "41~44", 持: "6'51\"~7'30\"", シ: "51~62", "50m": "8.0~8.4", 幅: "188~202", ハ: "19~21"},
            {p: 3, 握力: "23~27", 上体: "16~18", 長座: "28~32", 横: "37~40", 持: "7'31\"~8'19\"", シ: "37~50", "50m": "8.5~9.0", 幅: "170~187", ハ: "16~18"},
            {p: 2, 握力: "18~22", 上体: "13~15", 長座: "21~27", 横: "30~36", 持: "8'20\"~9'20\"", シ: "26~36", "50m": "9.1~9.7", 幅: "150~169", ハ: "13~15"},
            {p: 1, 握力: "17以下", 上体: "12以下", 長座: "20以下", 横: "29以下", 持: "9'21\"以上", シ: "25以下", "50m": "9.8以上", 幅: "149以下", ハ: "12以下"}
        ]
    },
    female: {
        h: ["握力", "上体起こし", "長座体前屈", "反復横とび", "持久走", "20mシャトルラン", "50m走", "立ち幅跳び", "ハンドボール投げ", "合計"],
        c: [
            {p: 10, 握力: "36以上", 上体: "29以上", 長座: "63以上", 横: "53以上", 持: "3'49\"以下", シ: "88以上", "50m": "7.7以下", 幅: "210以上", ハ: "23以上"},
            {p: 9, 握力: "33~35", 上体: "26~28", 長座: "58~62", 横: "50~52", 持: "3'50\"~4'02\"", シ: "76~87", "50m": "7.8~8.0", 幅: "200~209", ハ: "20~22"},
            {p: 8, 握力: "30~32", 上体: "23~25", 長座: "54~57", 横: "48~49", 持: "4'03\"~4'19\"", シ: "64~75", "50m": "8.1~8.3", 幅: "190~199", ハ: "18~19"},
            {p: 7, 握力: "28~29", 上体: "20~22", 長座: "50~53", 横: "45~47", 持: "4'20\"~4'37\"", シ: "54~63", "50m": "8.4~8.6", 幅: "179~189", ハ: "16~17"},
            {p: 6, 握力: "25~27", 上体: "18~19", 長座: "45~49", 横: "42~44", 持: "4'38\"~4'56\"", シ: "44~53", "50m": "8.7~8.9", 幅: "168~178", ハ: "14~15"},
            {p: 5, 握力: "23~24", 上体: "15~17", 長座: "40~44", 横: "39~41", 持: "4'57\"~5'18\"", シ: "35~43", "50m": "9.0~9.3", 幅: "157~167", ハ: "12~13"},
            {p: 4, 握力: "20~22", 上体: "13~14", 長座: "35~39", 横: "36~38", 持: "5'19\"~5'42\"", シ: "27~34", "50m": "9.4~9.8", 幅: "145~156", ハ: "11"},
            {p: 3, 握力: "17~19", 上体: "11~12", 長座: "30~34", 横: "32~35", 持: "5'43\"~6'14\"", シ: "21~26", "50m": "9.9~10.3", 幅: "132~144", ハ: "10"},
            {p: 2, 握力: "14~16", 上体: "8~10", 長座: "23~29", 横: "27~31", 持: "6'15\"~6'57\"", シ: "15~20", "50m": "10.4~11.2", 幅: "118~131", ハ: "8~9"},
            {p: 1, 握力: "13以下", 上体: "7以下", 長座: "22以下", 横: "26以下", 持: "6'58\"以上", シ: "14以下", "50m": "11.3以上", 幅: "117以下", ハ: "7以下"}
        ]
    }
};

const A = {
    male: {
        帯広市: [29.47, 25.10, 42.99, 48.95, 450.46, 80.04, 8.08, 198.10, 21.29],
        北海道: [29.57, 25.24, 42.77, 49.95, 435.12, 74.78, 8.16, 194.73, 20.31],
        全国: [28.95, 25.94, 44.47, 51.51, 410.69, 78.98, 7.99, 197.18, 20.57]
    },
    female: {
        帯広市: [22.38, 20.97, 44.46, 43.20, 333.61, 50.67, 8.97, 166.77, 12.52],
        北海道: [23.03, 20.66, 45.02, 43.99, 322.25, 46.33, 9.16, 161.52, 12.16],
        全国: [23.18, 21.56, 46.47, 45.65, 309.02, 50.67, 8.96, 166.32, 12.40]
    }
};

const T = {
    male: {
        帯広市: 41.15,
        北海道: 40.49,
        全国: 41.86
    },
    female: {
        帯広市: 45.86,
        北海道: 45.16,
        全国: 47.37
    }
};

const E = [
    {s: "A", c1: "57以上", c2: "60以上", c3: "61以上"},
    {s: "B", c1: "47~56", c2: "51~59", c3: "52~60"},
    {s: "C", c1: "37~46", c2: "41~50", c3: "41~51"},
    {s: "D", c1: "27~36", c2: "31~40", c3: "31~40"},
    {s: "E", c1: "26以下", c2: "30以下", c3: "30以下"}
];

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZmY8TnWXRh4c0ZxSYO9GuJcVW3caCm07-ib0zidDMaA1kraa6cFDvyX6GySx2f9jI/exec';

// ユーティリティ関数
function N(m, t) {
    t = t || 'success';
    const n = document.getElementById('notif');
    n.textContent = m;
    n.className = 'notification ' + t;
    n.style.display = 'block';
    setTimeout(function() {
        n.style.display = 'none';
    }, 3000);
}

function K(h) {
    if (h.includes("握")) return "握力";
    if (h.includes("上")) return "上体";
    if (h.includes("長")) return "長座";
    if (h.includes("横")) return "横";
    if (h.includes("持")) return "持";
    if (h.includes("シ")) return "シ";
    if (h.includes("50")) return "50m";
    if (h.includes("幅")) return "幅";
    if (h.includes("ハ")) return "ハ";
    return "";
}

function TS(t) {
    if (!t.includes("'")) return parseFloat(t);
    const c = t.replace(/以下|以上/g, "").trim();
    const p = c.split("'");
    return parseInt(p[0]) * 60 + parseInt(p[1].replace("\"", ""));
}

function CS(v, h, g) {
    const c = D[g].c;
    const k = K(h);
    let rv = k === "50m" || k === "持" ? Math.ceil(v * 100) / 100 : Math.floor(v);
    
    for (let j = 0; j < c.length; j++) {
        const r = c[j];
        const t = r[k];
        let m = false;
        
        if (t.includes("以上")) {
            const th = k === "持" ? TS(t) : parseFloat(t);
            if (rv >= th) m = true;
        } else if (t.includes("以下")) {
            const th = k === "持" ? TS(t) : parseFloat(t);
            if (rv <= th) m = true;
        } else if (t.includes("~")) {
            const p = t.split("~");
            let min, max;
            if (k === "持") {
                min = TS(p[0]);
                max = TS(p[1]);
                if (rv >= min && rv <= max + 0.99) m = true;
            } else {
                min = parseFloat(p[0]);
                max = parseFloat(p[1]);
                if (k === "50m") {
                    if (rv >= min && rv <= max + 0.09) m = true;
                } else {
                    if (rv >= min && rv <= max) m = true;
                }
            }
        }
        
        if (m) return r.p;
    }
    return 0;
}

// テーブル描画
function RT() {
    const g = document.getElementById("gender").value;
    const h = D[g].h;
    let s = '<table><tr><th></th>';
    h.forEach(function(x) {
        s += '<th>' + x + '</th>';
    });
    s += '</tr>';
    
    ["記録", "帯広市", "北海道", "全国"].forEach(function(r) {
        s += '<tr><td>' + r + '</td>';
        h.forEach(function(x, j) {
            if (r === "記録") {
                if (j < 9) {
                    s += '<td><input type="number" id="i' + j + '" onchange="U()" step="0.01"></td>';
                } else {
                    s += '<td id="i9"><div>0</div><div>E</div></td>';
                }
            } else {
                let v = A[g][r][j];
                if (j === 9) {
                    v = T[g][r];
                    s += '<td>' + v + '</td>';
                } else {
                    const sc = CS(v, x, g);
                    s += '<td><div>' + v + '</div><div style="font-size:0.85em;color:#666">(' + sc + '点)</div></td>';
                }
            }
        });
        s += '</tr>';
    });
    s += '</table>';
    document.getElementById("table").innerHTML = s;
}

function RS() {
    const g = document.getElementById("gender").value;
    const c = D[g].c;
    const h = D[g].h;
    let s = '<table><tr><th>点数</th>';
    h.slice(0, -1).forEach(function(x) {
        s += '<th>' + x + '</th>';
    });
    s += '</tr>';
    
    c.forEach(function(r, ri) {
        s += '<tr><td>' + r.p + '</td>';
        h.slice(0, -1).forEach(function(x, ci) {
            s += '<td id="s' + ri + '-' + ci + '">' + r[K(x)] + '</td>';
        });
        s += '</tr>';
    });
    s += '</table>';
    document.getElementById("score").innerHTML = s;
}

function RE() {
    let s = '<table><tr><th>段階</th><th>中1(13歳)</th><th>中2(14歳)</th><th>中3(15歳)</th></tr>';
    E.forEach(function(r) {
        s += '<tr><td>' + r.s + '</td><td id="e' + r.s + '1">' + r.c1 + '</td><td id="e' + r.s + '2">' + r.c2 + '</td><td id="e' + r.s + '3">' + r.c3 + '</td></tr>';
    });
    s += '</table>';
    document.getElementById("eval").innerHTML = s;
}

function U() {
    const g = document.getElementById("gender").value;
    const gr = parseInt(document.getElementById("grade").value);
    const c = D[g].c;
    const h = D[g].h;
    let tot = 0;
    
    c.forEach(function(r, ri) {
        h.slice(0, -1).forEach(function(x, ci) {
            const el = document.getElementById('s' + ri + '-' + ci);
            if (el) el.style.background = '';
        });
    });
    
    E.forEach(function(r) {
        [1, 2, 3].forEach(function(a) {
            const el = document.getElementById('e' + r.s + a);
            if (el) el.classList.remove("highlight");
        });
    });
    
    let scores = [];
    h.slice(0, -1).forEach(function(x, i) {
        const v = parseFloat(document.getElementById('i' + i).value);
        if (isNaN(v)) {
            scores.push(null);
            return;
        }
        
        const k = K(x);
        let rv = k === "50m" || k === "持" ? Math.ceil(v * 100) / 100 : Math.floor(v);
        
        for (let j = 0; j < c.length; j++) {
            const r = c[j];
            const t = r[k];
            let m = false;
            
            if (t.includes("以上")) {
                const th = k === "持" ? TS(t) : parseFloat(t);
                if (rv >= th) m = true;
            } else if (t.includes("以下")) {
                const th = k === "持" ? TS(t) : parseFloat(t);
                if (rv <= th) m = true;
            } else if (t.includes("~")) {
                const p = t.split("~");
                let min, max;
                if (k === "持") {
                    min = TS(p[0]);
                    max = TS(p[1]);
                    if (rv >= min && rv <= max + 0.99) m = true;
                } else {
                    min = parseFloat(p[0]);
                    max = parseFloat(p[1]);
                    if (k === "50m") {
                        if (rv >= min && rv <= max + 0.09) m = true;
                    } else {
                        if (rv >= min && rv <= max) m = true;
                    }
                }
            }
            
            if (m) {
                scores.push(r.p);
                const el = document.getElementById('s' + j + '-' + i);
                if (el) el.style.background = '#cceeff';
                break;
            }
        }
    });
    
    const enduranceScore = scores[4] || 0;
    const shuttleScore = scores[5] || 0;
    
    if (enduranceScore > 0 && shuttleScore > 0) {
        tot = scores[0] + scores[1] + scores[2] + scores[3] + Math.max(enduranceScore, shuttleScore) + scores[6] + scores[7] + scores[8];
    } else {
        scores.forEach(function(sc) {
            if (sc !== null) tot += sc;
        });
    }
    
    const sc = document.getElementById("i9");
    let lv = "E";
    
    for (let i = 0; i < E.length; i++) {
        const r = E[i];
        const rg = r['c' + gr];
        let min, max;
        
        if (rg.includes("以上")) {
            min = parseFloat(rg);
            max = Infinity;
        } else if (rg.includes("以下")) {
            min = -Infinity;
            max = parseFloat(rg);
        } else if (rg.includes("~")) {
            const parts = rg.split("~");
            min = parseFloat(parts[0]);
            max = parseFloat(parts[1]);
        } else {
            min = max = parseFloat(rg);
        }
        
        if (tot >= min && tot <= max) {
            lv = r.s;
            break;
        }
    }
    
    sc.querySelector("div").textContent = tot;
    sc.querySelectorAll("div")[1].textContent = lv;
    
    const el = document.getElementById('e' + lv + gr);
    if (el) el.classList.add("highlight");
    
    SI();
}

// データ保存・読み込み
function SI() {
    const g = document.getElementById("gender").value;
    let v = [];
    for (let i = 0; i < 9; i++) {
        const val = parseFloat(document.getElementById('i' + i).value);
        v.push(isNaN(val) ? "" : val);
    }
    localStorage.setItem("m-" + g, JSON.stringify(v));
}

function LI() {
    const g = document.getElementById("gender").value;
    const sv = localStorage.getItem("m-" + g);
    if (sv) {
        const v = JSON.parse(sv);
        for (let i = 0; i < v.length; i++) {
            document.getElementById('i' + i).value = v[i];
        }
        U();
    }
}

function exportData() {
    const g = document.getElementById("gender").value;
    const gr = document.getElementById("grade").value;
    
    let v = [];
    for (let i = 0; i < 9; i++) {
        const val = parseFloat(document.getElementById('i' + i).value);
        v.push(isNaN(val) ? null : val);
    }
    
    const yearKey = 'y-' + g;
    const yearData = JSON.parse(localStorage.getItem(yearKey) || '{}');
    
    const trackingKey = 'tracking-' + g;
    const trackingData = JSON.parse(localStorage.getItem(trackingKey) || '{}');
    
    const bd = {
        v: "2.0",
        d: new Date().toISOString(),
        g: g,
        gr: parseInt(gr),
        vals: v,
        yearData: yearData,
        trackingData: trackingData
    };
    
    const js = JSON.stringify(bd, null, 2);
    const blob = new Blob([js], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '体力完全版_' + (g === 'male' ? '男' : '女') + '_中' + gr + '_' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
    N('全データをバックアップしました!');
}

function importData() {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = '.json';
    inp.onchange = function(e) {
        const f = e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = function(ev) {
            try {
                const bd = JSON.parse(ev.target.result);
                if (!bd.v) {
                    N('無効なファイル', 'error');
                    return;
                }
                
                document.getElementById("gender").value = bd.g;
                document.getElementById("grade").value = bd.gr;
                RT();
                RS();
                bd.vals.forEach(function(v, i) {
                    const inp = document.getElementById('i' + i);
                    if (inp && v !== null) inp.value = v;
                });
                U();
                
                if (bd.yearData) {
                    const yearKey = 'y-' + bd.g;
                    localStorage.setItem(yearKey, JSON.stringify(bd.yearData));
                }
                
                if (bd.trackingData) {
                    const trackingKey = 'tracking-' + bd.g;
                    localStorage.setItem(trackingKey, JSON.stringify(bd.trackingData));
                }
                
                N('全データを復元しました!');
            } catch (err) {
                N('読み込み失敗', 'error');
                console.error(err);
            }
        };
        r.readAsText(f);
    };
    inp.click();
}

function clearAllData() {
    if (!confirm('データをクリアしますか?')) return;
    for (let i = 0; i < 9; i++) {
        document.getElementById('i' + i).value = '';
    }
    localStorage.removeItem("m-" + document.getElementById("gender").value);
    U();
    N('クリア完了', 'info');
}

function saveYearData() {
    const g = document.getElementById("gender").value;
    const gr = document.getElementById("grade").value;
    let v = [];
    let hasAnyData = false;
    
    for (let i = 0; i < 9; i++) {
        const val = parseFloat(document.getElementById('i' + i).value);
        if (!isNaN(val)) {
            hasAnyData = true;
            v.push(val);
        } else {
            v.push(null);
        }
    }
    
    if (!hasAnyData) {
        N('少なくとも1つの種目を入力してください', 'error');
        return;
    }
    
    const k = 'y-' + g;
    let yd = JSON.parse(localStorage.getItem(k) || '{}');
    yd['中' + gr] = {v: v, d: new Date().toISOString()};
    localStorage.setItem(k, JSON.stringify(yd));
    N('中' + gr + 'を記録しました!');
    
    if (document.getElementById("growth").style.display !== "none") {
        RG(g);
    }
}

function sendToTeacher() {
    const sid = prompt('出席番号を入力してください(例:15)');
    const name = prompt('氏名を入力してください');
    
    if (!sid || !name) {
        N('出席番号と氏名を入力してください', 'error');
        return;
    }
    
    let vals = [];
    for (let i = 0; i < 9; i++) {
        const v = parseFloat(document.getElementById('i' + i).value);
        vals.push(isNaN(v) ? null : v);
    }
    
    const data = {
        studentId: sid,
        name: name,
        gender: document.getElementById('gender').value,
        grade: document.getElementById('grade').value,
        class: document.getElementById('class').value,
        session: document.getElementById('session').value,
        grip: vals[0],
        situp: vals[1],
        forward: vals[2],
        sidestep: vals[3],
        endurance: vals[4],
        shuttle: vals[5],
        sprint50: vals[6],
        jump: vals[7],
        throw: vals[8]
    };
    
    N('送信中...', 'info');
    
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function() {
        N('先生に送信しました!', 'success');
    }).catch(function(err) {
        N('送信に失敗しました', 'error');
        console.error(err);
    });
}

// トグル機能
function toggleRadar() {
    const c = document.getElementById("radar");
    if (c.style.display === "none") {
        c.style.display = "block";
        RR(document.getElementById("gender").value);
    } else {
        c.style.display = "none";
    }
}

function toggleGrowth() {
    const c = document.getElementById("growth");
    if (c.style.display === "none") {
        c.style.display = "block";
        RG(document.getElementById("gender").value);
    } else {
        c.style.display = "none";
    }
}

function toggleAnalysis() {
    const c = document.getElementById("correlation");
    if (c.style.display === "none") {
        c.style.display = "block";
        RAnalysis(document.getElementById("gender").value);
    } else {
        c.style.display = "none";
    }
}

function toggleTracking() {
    const c = document.getElementById("tracking");
    if (c.style.display === "none") {
        c.style.display = "block";
        document.getElementById("trackingDate").valueAsDate = new Date();
        updateTrackingView();
    } else {
        c.style.display = "none";
    }
}

// トラッキング機能（簡易版）
function addTrackingRecord() {
    N('トラッキング機能は開発中です', 'info');
}

function updateTrackingView() {
    const ctx = document.getElementById("trackingGraph").getContext("2d");
    ctx.clearRect(0, 0, 1000, 400);
    ctx.fillStyle = '#666';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('記録を追加すると、グラフが表示されます', 500, 200);
    
    document.getElementById("trackingStats").innerHTML = '<p style="text-align:center;color:#666">データがありません</p>';
    document.getElementById("trackingList").innerHTML = '<p style="text-align:center;color:#666;padding:20px">データがありません</p>';
}

// 分析機能（簡易版）
function RAnalysis(g) {
    document.getElementById("fitnessPokedex").innerHTML = '<div style="grid-column:1/-1;text-align:center;color:white;opacity:0.8;padding:40px">データを入力すると図鑑が表示されます</div>';
    document.getElementById("totalRank").innerHTML = '';
    document.getElementById("goalSimulator").innerHTML = '<div style="text-align:center;color:#666;padding:40px">上のボタンから目標を選んでください</div>';
}

function setGoal(goalType) {
    N('目標設定機能は開発中です', 'info');
}

// レーダーチャート
function RR(g) {
    const cv = document.getElementById("rc");
    const ctx = cv.getContext("2d");
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = '#666';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('データを入力するとレーダーチャートが表示されます', 300, 300);
}

// 経年変化グラフ
function RG(g) {
    const cv = document.getElementById("gc");
    const ctx = cv.getContext("2d");
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = '#666';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('年度データを記録すると経年変化が表示されます', 500, 250);
}

// モーダル機能
let currentStep = 0;

function testModal() {
    N('初回設定ガイドを開きます', 'success');
    currentStep = 0;
    const modal = document.getElementById('setupModal');
    if (modal) {
        modal.style.display = 'block';
        renderCurrentStep();
    }
}

function closeSetupGuide() {
    const modal = document.getElementById('setupModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function nextStep() {
    currentStep++;
    renderCurrentStep();
}

function prevStep() {
    currentStep--;
    renderCurrentStep();
}

function renderCurrentStep() {
    const content = document.getElementById('setupContent');
    if (!content) return;
    
    const steps = [
        '<div style="text-align:center"><h2 style="color:#FF5722;font-size:32px;margin-bottom:20px">🎯 初回設定ガイド</h2><p style="font-size:18px;line-height:1.8;color:#666;margin-bottom:30px">生徒から送られてくる記録を<br>あなたのGoogleスプレッドシートで<br>自動管理できるようにします!</p><div style="background:#f5f5f5;padding:20px;border-radius:12px;margin-bottom:30px"><p style="margin:10px 0">⏱️ <strong>所要時間:</strong> 約15~20分</p><p style="margin:10px 0">🔧 <strong>必要なもの:</strong> Googleアカウント</p></div><div style="margin-top:40px"><button class="btn" style="background:linear-gradient(135deg,#FF5722,#FF7043);font-size:18px;padding:15px 50px" onclick="nextStep()">はじめる ▶</button></div><div style="margin-top:20px"><button class="btn" style="background:#999;padding:10px 30px" onclick="closeSetupGuide()">キャンセル</button></div></div>',
        
        '<div><h3 style="color:#FF5722;margin-bottom:20px">🔗 スプレッドシートURL登録</h3><div style="background:#fff3e0;padding:20px;border-radius:12px;border-left:5px solid #FF5722;margin-bottom:20px"><p style="margin:0;font-weight:bold">✅ Google Apps ScriptのURLを入力してください</p></div><p style="font-size:16px;line-height:1.8;margin-bottom:20px">デプロイで取得した「ウェブアプリURL」を下の欄に貼り付けてください:</p><div style="margin:20px 0"><input type="text" id="teacherUrlInput" placeholder="https://script.google.com/macros/s/.../exec" style="width:100%;padding:15px;border:2px solid #FF5722;border-radius:8px;font-size:14px;box-sizing:border-box"></div><p style="color:#666;font-size:14px;margin-top:10px">※ URLは「https://script.google.com/」で始まり「/exec」で終わります</p><div style="margin-top:30px;display:flex;justify-content:space-between"><button class="btn" style="background:#999" onclick="prevStep()">◀ 戻る</button><button class="btn" style="background:linear-gradient(135deg,#4CAF50,#66BB6A)" onclick="saveUrlAndNext()">保存して次へ ▶</button></div></div>',
        
        '<div><h3 style="color:#4CAF50;margin-bottom:20px">✅ 保存確認</h3><div style="background:#e8f5e9;padding:20px;border-radius:12px;margin-bottom:20px"><p style="margin:0 0 10px 0;font-weight:bold">保存されたURL:</p><div style="background:white;padding:10px;border-radius:8px;word-break:break-all;font-size:13px;color:#1976d2">' + (localStorage.getItem('teacherScriptUrl') || '(未保存)') + '</div></div><p style="margin-top:20px;line-height:1.8">このURLが正しく保存されました。<br>次のステップで生徒配布用URLを生成します。</p><div style="margin-top:30px;display:flex;justify-content:space-between"><button class="btn" style="background:#999" onclick="prevStep()">◀ 戻る</button><button class="btn" style="background:linear-gradient(135deg,#FF5722,#FF7043)" onclick="nextStep()">次へ ▶</button></div></div>',
        
        '<div style="text-align:center"><h2 style="color:#4CAF50;font-size:32px;margin-bottom:20px">🎉 設定完了!</h2><p style="font-size:18px;margin:20px 0">URL保存機能が正常に動作しています!</p><div style="margin-top:40px"><button class="btn" style="background:linear-gradient(135deg,#4CAF50,#66BB6A);padding:15px 40px" onclick="closeSetupGuide()">完了</button></div><div style="margin-top:20px"><button class="btn" style="background:#999;padding:10px 30px" onclick="prevStep()">◀ 戻る</button></div></div>'
    ];
    
    if (currentStep < 0) currentStep = 0;
    if (currentStep >= steps.length) currentStep = steps.length - 1;
    
    content.innerHTML = steps[currentStep];
}

function saveUrlAndNext() {
    const urlInput = document.getElementById('teacherUrlInput');
    if (!urlInput) {
        N('入力欄が見つかりません', 'error');
        return;
    }
    
    const url = urlInput.value.trim();
    
    if (!url) {
        N('URLを入力してください', 'error');
        return;
    }
    
    if (!url.startsWith('https://script.google.com/')) {
        N('正しいGoogle Apps ScriptのURLを入力してください', 'error');
        return;
    }
    
    if (!url.endsWith('/exec')) {
        N('URLは「/exec」で終わる必要があります', 'error');
        return;
    }
    
    try {
        localStorage.setItem('teacherScriptUrl', url);
        N('URLを保存しました!', 'success');
        
        setTimeout(function() {
            nextStep();
        }, 500);
    } catch (e) {
        console.error('保存エラー:', e);
        N('保存に失敗しました', 'error');
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded - 初期化開始');
    
    RT();
    RS();
    RE();
    LI();
    
    document.getElementById("gender").addEventListener("change", function() {
        const g = document.getElementById("gender").value;
        RT();
        RS();
        if (document.getElementById("radar").style.display !== "none") RR(g);
        if (document.getElementById("growth").style.display !== "none") RG(g);
        if (document.getElementById("correlation").style.display !== "none") RAnalysis(g);
        if (document.getElementById("tracking").style.display !== "none") updateTrackingView();
        LI();
    });
    
    document.getElementById("grade").addEventListener("change", U);
    
    console.log('初期化完了');
});
