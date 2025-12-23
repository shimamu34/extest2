        const D = {
            male: {
                h: ["握力", "上体起こし", "長座体前屈", "反復横とび", "持久走", "20mシャトルラン", "50m走", "立ち幅跳び", "ハンドボール投げ", "合計"],
                c: [
                    {p: 10, 握力: "56以上", 上体: "35以上", 長座: "64以上", 横: "63以上", 持: "4'59\"以下", シ: "125以上", "50m": "6.6以下", 幅: "265以上", ハ: "37以上"},
                    {p: 9, 握力: "51～55", 上体: "33～34", 長座: "58～63", 横: "60～62", 持: "5'00\"～5'16\"", シ: "113～124", "50m": "6.7～6.8", 幅: "254～264", ハ: "34～36"},
                    {p: 8, 握力: "47～50", 上体: "30～32", 長座: "53～57", 横: "56～59", 持: "5'17\"～5'33\"", シ: "102～112", "50m": "6.9～7.0", 幅: "242～253", ハ: "31～33"},
                    {p: 7, 握力: "43～46", 上体: "27～29", 長座: "49～52", 横: "53～55", 持: "5'34\"～5'55\"", シ: "90～101", "50m": "7.1～7.2", 幅: "230～241", ハ: "28～30"},
                    {p: 6, 握力: "38～42", 上体: "25～26", 長座: "44～48", 横: "49～52", 持: "5'56\"～6'22\"", シ: "76～89", "50m": "7.3～7.5", 幅: "218～229", ハ: "25～27"},
                    {p: 5, 握力: "33～37", 上体: "22～24", 長座: "39～43", 横: "45～48", 持: "6'23\"～6'50\"", シ: "63～75", "50m": "7.6～7.9", 幅: "203～217", ハ: "22～24"},
                    {p: 4, 握力: "28～32", 上体: "19～21", 長座: "33～38", 横: "41～44", 持: "6'51\"～7'30\"", シ: "51～62", "50m": "8.0～8.4", 幅: "188～202", ハ: "19～21"},
                    {p: 3, 握力: "23～27", 上体: "16～18", 長座: "28～32", 横: "37～40", 持: "7'31\"～8'19\"", シ: "37～50", "50m": "8.5～9.0", 幅: "170～187", ハ: "16～18"},
                    {p: 2, 握力: "18～22", 上体: "13～15", 長座: "21～27", 横: "30～36", 持: "8'20\"～9'20\"", シ: "26～36", "50m": "9.1～9.7", 幅: "150～169", ハ: "13～15"},
                    {p: 1, 握力: "17以下", 上体: "12以下", 長座: "20以下", 横: "29以下", 持: "9'21\"以上", シ: "25以下", "50m": "9.8以上", 幅: "149以下", ハ: "12以下"}
                ]
            },
            female: {
                h: ["握力", "上体起こし", "長座体前屈", "反復横とび", "持久走", "20mシャトルラン", "50m走", "立ち幅跳び", "ハンドボール投げ", "合計"],
                c: [
                    {p: 10, 握力: "36以上", 上体: "29以上", 長座: "63以上", 横: "53以上", 持: "3'49\"以下", シ: "88以上", "50m": "7.7以下", 幅: "210以上", ハ: "23以上"},
                    {p: 9, 握力: "33～35", 上体: "26～28", 長座: "58～62", 横: "50～52", 持: "3'50\"～4'02\"", シ: "76～87", "50m": "7.8～8.0", 幅: "200～209", ハ: "20～22"},
                    {p: 8, 握力: "30～32", 上体: "23～25", 長座: "54～57", 横: "48～49", 持: "4'03\"～4'19\"", シ: "64～75", "50m": "8.1～8.3", 幅: "190～199", ハ: "18～19"},
                    {p: 7, 握力: "28～29", 上体: "20～22", 長座: "50～53", 横: "45～47", 持: "4'20\"～4'37\"", シ: "54～63", "50m": "8.4～8.6", 幅: "179～189", ハ: "16～17"},
                    {p: 6, 握力: "25～27", 上体: "18～19", 長座: "45～49", 横: "42～44", 持: "4'38\"～4'56\"", シ: "44～53", "50m": "8.7～8.9", 幅: "168～178", ハ: "14～15"},
                    {p: 5, 握力: "23～24", 上体: "15～17", 長座: "40～44", 横: "39～41", 持: "4'57\"～5'18\"", シ: "35～43", "50m": "9.0～9.3", 幅: "157～167", ハ: "12～13"},
                    {p: 4, 握力: "20～22", 上体: "13～14", 長座: "35～39", 横: "36～38", 持: "5'19\"～5'42\"", シ: "27～34", "50m": "9.4～9.8", 幅: "145～156", ハ: "11"},
                    {p: 3, 握力: "17～19", 上体: "11～12", 長座: "30～34", 横: "32～35", 持: "5'43\"～6'14\"", シ: "21～26", "50m": "9.9～10.3", 幅: "132～144", ハ: "10"},
                    {p: 2, 握力: "14～16", 上体: "8～10", 長座: "23～29", 横: "27～31", 持: "6'15\"～6'57\"", シ: "15～20", "50m": "10.4～11.2", 幅: "118～131", ハ: "8～9"},
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
            {s: "B", c1: "47～56", c2: "51～59", c3: "52～60"},
            {s: "C", c1: "37～46", c2: "41～50", c3: "41～51"},
            {s: "D", c1: "27～36", c2: "31～40", c3: "31～40"},
            {s: "E", c1: "26以下", c2: "30以下", c3: "30以下"}
        ];
        
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZmY8TnWXRh4c0ZxSYO9GuJcVW3caCm07-ib0zidDMaA1kraa6cFDvyX6GySx2f9jI/exec';
        
        function sendToTeacher() {
            const sid = prompt('出席番号を入力してください（例：15）');
            const name = prompt('氏名を入力してください');
            
            if (!sid || !name) {
                N('出席番号と氏名を入力してください', 'error');
                return;
            }
            
            let vals = [];
            for (let i = 0; i < 9; i++) {
                const v = parseFloat(document.getElementById(`i${i}`).value);
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
            }).then(() => {
                N('先生に送信しました！', 'success');
            }).catch(err => {
                N('送信に失敗しました', 'error');
                console.error(err);
            });
        }
        
        function N(m, t = 'success') {
            const n = document.getElementById('notif');
            n.textContent = m;
            n.className = `notification ${t}`;
            n.style.display = 'block';
            setTimeout(() => n.style.display = 'none', 3000);
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
                } else if (t.includes("～")) {
                    const p = t.split("～");
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
        
        function RT() {
            const g = document.getElementById("gender").value;
            const h = D[g].h;
            let s = '<table><tr><th></th>';
            h.forEach(x => s += `<th>${x}</th>`);
            s += '</tr>';
            
            ["記録", "帯広市", "北海道", "全国"].forEach(r => {
                s += '<tr><td>' + r + '</td>';
                h.forEach((x, j) => {
                    if (r === "記録") {
                        if (j < 9) s += `<td><input type="number" id="i${j}" onchange="U()" step="0.01"></td>`;
                        else s += `<td id="i9"><div>0</div><div>E</div></td>`;
                    } else {
                        let v = A[g][r][j];
                        if (j === 9) {
                            v = T[g][r];
                            s += `<td>${v}</td>`;
                        } else {
                            const sc = CS(v, x, g);
                            s += `<td><div>${v}</div><div style="font-size:0.85em;color:#666">(${sc}点)</div></td>`;
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
            h.slice(0, -1).forEach(x => s += `<th>${x}</th>`);
            s += '</tr>';
            
            c.forEach((r, ri) => {
                s += `<tr><td>${r.p}</td>`;
                h.slice(0, -1).forEach((x, ci) => {
                    s += `<td id="s${ri}-${ci}">${r[K(x)]}</td>`;
                });
                s += '</tr>';
            });
            s += '</table>';
            document.getElementById("score").innerHTML = s;
        }
        
        function RE() {
            let s = '<table><tr><th>段階</th><th>中1（13歳）</th><th>中2（14歳）</th><th>中3（15歳）</th></tr>';
            E.forEach(r => {
                s += `<tr><td>${r.s}</td><td id="e${r.s}1">${r.c1}</td><td id="e${r.s}2">${r.c2}</td><td id="e${r.s}3">${r.c3}</td></tr>`;
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
            
            c.forEach((r, ri) => h.slice(0, -1).forEach((x, ci) => {
                const el = document.getElementById(`s${ri}-${ci}`);
                if (el) el.style.background = '';
            }));
            
            E.forEach(r => [1, 2, 3].forEach(a => {
                const el = document.getElementById(`e${r.s}${a}`);
                if (el) el.classList.remove("highlight");
            }));
            
            let scores = [];
            h.slice(0, -1).forEach((x, i) => {
                const v = parseFloat(document.getElementById(`i${i}`).value);
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
                    } else if (t.includes("～")) {
                        const p = t.split("～");
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
                        const el = document.getElementById(`s${j}-${i}`);
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
                scores.forEach((sc, i) => {
                    if (sc !== null) tot += sc;
                });
            }
            
            const sc = document.getElementById("i9");
            let lv = "E";
            
            for (let i = 0; i < E.length; i++) {
                const r = E[i];
                const rg = r[`c${gr}`];
                let min, max;
                
                if (rg.includes("以上")) {
                    min = parseFloat(rg);
                    max = Infinity;
                } else if (rg.includes("以下")) {
                    min = -Infinity;
                    max = parseFloat(rg);
                } else if (rg.includes("～")) {
                    [min, max] = rg.split("～").map(Number);
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
            
            const el = document.getElementById(`e${lv}${gr}`);
            if (el) el.classList.add("highlight");
            
            SI();
        }
        
        function SI() {
            const g = document.getElementById("gender").value;
            let v = [];
            for (let i = 0; i < 9; i++) {
                v.push(parseFloat(document.getElementById(`i${i}`).value) || "");
            }
            localStorage.setItem("m-" + g, JSON.stringify(v));
        }
        
        function LI() {
            const g = document.getElementById("gender").value;
            const sv = localStorage.getItem("m-" + g);
            if (sv) {
                const v = JSON.parse(sv);
                for (let i = 0; i < v.length; i++) {
                    document.getElementById(`i${i}`).value = v[i];
                }
                U();
            }
        }
        
        function exportData() {
            const g = document.getElementById("gender").value;
            const gr = document.getElementById("grade").value;
            
            // 現在の測定値
            let v = [];
            for (let i = 0; i < 9; i++) {
                v.push(parseFloat(document.getElementById(`i${i}`).value) || null);
            }
            
            // 経年変化データ
            const yearKey = `y-${g}`;
            const yearData = JSON.parse(localStorage.getItem(yearKey) || '{}');
            
            // 種目別トラッキングデータ
            const trackingKey = `tracking-${g}`;
            const trackingData = JSON.parse(localStorage.getItem(trackingKey) || '{}');
            
            // 全データを統合
            const bd = {
                v: "2.0", // バージョンアップ
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
            a.download = `体力完全版_${g === 'male' ? '男' : '女'}_中${gr}_${new Date().toISOString().slice(0, 10)}.json`;
            a.click();
            URL.revokeObjectURL(url);
            N('全データをバックアップしました！');
        }
        
        function importData() {
            const inp = document.createElement('input');
            inp.type = 'file';
            inp.accept = '.json';
            inp.onchange = e => {
                const f = e.target.files[0];
                if (!f) return;
                const r = new FileReader();
                r.onload = ev => {
                    try {
                        const bd = JSON.parse(ev.target.result);
                        if (!bd.v) {
                            N('無効なファイル', 'error');
                            return;
                        }
                        
                        // 基本データの復元
                        document.getElementById("gender").value = bd.g;
                        document.getElementById("grade").value = bd.gr;
                        RT();
                        RS();
                        bd.vals.forEach((v, i) => {
                            const inp = document.getElementById(`i${i}`);
                            if (inp && v !== null) inp.value = v;
                        });
                        U();
                        
                        // 経年変化データの復元
                        if (bd.yearData) {
                            const yearKey = `y-${bd.g}`;
                            localStorage.setItem(yearKey, JSON.stringify(bd.yearData));
                        }
                        
                        // 種目別トラッキングデータの復元
                        if (bd.trackingData) {
                            const trackingKey = `tracking-${bd.g}`;
                            localStorage.setItem(trackingKey, JSON.stringify(bd.trackingData));
                        }
                        
                        N('全データを復元しました！');
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
            if (!confirm('データをクリアしますか？')) return;
            for (let i = 0; i < 9; i++) {
                document.getElementById(`i${i}`).value = '';
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
                const val = parseFloat(document.getElementById(`i${i}`).value);
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
            
            const k = `y-${g}`;
            let yd = JSON.parse(localStorage.getItem(k) || '{}');
            yd[`中${gr}`] = {v: v, d: new Date().toISOString()};
            localStorage.setItem(k, JSON.stringify(yd));
            N(`中${gr}を記録しました！`);
            
            if (document.getElementById("growth").style.display !== "none") {
                RG(g);
            }
        }
        
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
        
        function toggleCorrelation() {
            const c = document.getElementById("correlation");
            if (c.style.display === "none") {
                c.style.display = "block";
                RAnalysis(document.getElementById("gender").value);
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
        
        function addTrackingRecord() {
            const eventIdx = parseInt(document.getElementById("trackingEvent").value);
            const value = parseFloat(document.getElementById("trackingValue").value);
            const unit = document.getElementById("trackingUnit").value;
            const date = document.getElementById("trackingDate").value;
            const memo = document.getElementById("trackingMemo").value;
            const g = document.getElementById("gender").value;
            const h = D[g].h;
            
            if (isNaN(value) || !date) {
                N('測定値と日付を入力してください', 'error');
                return;
            }
            
            const score = CS(value, h[eventIdx], g);
            
            const key = `tracking-${g}`;
            let trackingData = JSON.parse(localStorage.getItem(key) || '{}');
            
            if (!trackingData[eventIdx]) {
                trackingData[eventIdx] = [];
            }
            
            trackingData[eventIdx].push({
                date: date,
                value: value,
                unit: unit,
                memo: memo,
                score: score
            });
            
            trackingData[eventIdx].sort((a, b) => new Date(a.date) - new Date(b.date));
            
            localStorage.setItem(key, JSON.stringify(trackingData));
            
            document.getElementById("trackingValue").value = '';
            document.getElementById("trackingUnit").value = '';
            document.getElementById("trackingMemo").value = '';
            
            N('記録を追加しました！', 'success');
            
            document.getElementById("trackingViewEvent").value = eventIdx;
            updateTrackingView();
        }
        
        function updateTrackingView() {
            const eventIdx = parseInt(document.getElementById("trackingViewEvent").value);
            const g = document.getElementById("gender").value;
            const h = D[g].h;
            
            const key = `tracking-${g}`;
            const trackingData = JSON.parse(localStorage.getItem(key) || '{}');
            const records = trackingData[eventIdx] || [];
            
            if (records.length === 0) {
                document.getElementById("trackingGraph").getContext("2d").clearRect(0, 0, 1000, 400);
                const ctx = document.getElementById("trackingGraph").getContext("2d");
                ctx.fillStyle = '#666';
                ctx.font = '18px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('記録を追加すると、グラフが表示されます', 500, 200);
                
                document.getElementById("trackingStats").innerHTML = '<p style="text-align:center;color:#666">データがありません</p>';
                document.getElementById("trackingList").innerHTML = '<p style="text-align:center;color:#666;padding:20px">データがありません</p>';
                return;
            }
            
            drawTrackingGraph(records, h[eventIdx]);
            updateTrackingStats(records, h[eventIdx]);
            updateTrackingList(records, h[eventIdx], eventIdx);
        }
        
        function drawTrackingGraph(records, eventName) {
            const cv = document.getElementById("trackingGraph");
            const ctx = cv.getContext("2d");
            ctx.clearRect(0, 0, cv.width, cv.height);
            
            const p = {t: 40, r: 80, b: 80, l: 80};
            const cW = cv.width - p.l - p.r;
            const cH = cv.height - p.t - p.b;
            
            const values = records.map(r => r.value);
            const maxVal = Math.max(...values);
            const minVal = Math.min(...values);
            const range = maxVal - minVal;
            const padding = range * 0.1;
            
            const yMax = maxVal + padding;
            const yMin = Math.max(0, minVal - padding);
            const yRange = yMax - yMin;
            
            // グリッド線
            ctx.strokeStyle = '#e0e0e0';
            ctx.lineWidth = 1;
            for (let i = 0; i <= 5; i++) {
                const y = p.t + (cH / 5) * i;
                ctx.beginPath();
                ctx.moveTo(p.l, y);
                ctx.lineTo(p.l + cW, y);
                ctx.stroke();
                
                const val = yMax - (yRange / 5) * i;
                ctx.fillStyle = '#666';
                ctx.font = '12px Arial';
                ctx.textAlign = 'right';
                ctx.fillText(val.toFixed(1), p.l - 10, y + 4);
            }
            
            // X軸ラベル
            ctx.fillStyle = '#666';
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';
            records.forEach((r, i) => {
                const x = p.l + (cW / (records.length - 1)) * i;
                const date = new Date(r.date);
                const label = `${i + 1}回目
${date.getMonth() + 1}/${date.getDate()}`;
                ctx.fillText(label, x, cv.height - p.b + 30);
            });
            
            // データ線
            ctx.strokeStyle = '#FF5722';
            ctx.lineWidth = 3;
            ctx.beginPath();
            records.forEach((r, i) => {
                const x = p.l + (cW / (records.length - 1)) * i;
                const y = p.t + cH - ((r.value - yMin) / yRange) * cH;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();
            
            // データ点
            records.forEach((r, i) => {
                const x = p.l + (cW / (records.length - 1)) * i;
                const y = p.t + cH - ((r.value - yMin) / yRange) * cH;
                
                ctx.fillStyle = '#FF5722';
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.stroke();
                
                // 値表示
                ctx.fillStyle = '#333';
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(r.value, x, y - 12);
            });
            
            // タイトル
            ctx.fillStyle = '#FF5722';
            ctx.font = 'bold 18px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`${eventName} の変容`, cv.width / 2, 25);
        }
        
        function updateTrackingStats(records, eventName) {
            const first = records[0];
            const last = records[records.length - 1];
            const diff = last.value - first.value;
            const diffPercent = ((diff / first.value) * 100).toFixed(1);
            const avg = (records.reduce((sum, r) => sum + r.value, 0) / records.length).toFixed(1);
            const max = Math.max(...records.map(r => r.value));
            const maxRecord = records.find(r => r.value === max);
            
            let biggestGrowth = 0;
            let biggestGrowthIdx = -1;
            for (let i = 1; i < records.length; i++) {
                const growth = records[i].value - records[i - 1].value;
                if (growth > biggestGrowth) {
                    biggestGrowth = growth;
                    biggestGrowthIdx = i;
                }
            }
            
            const diffColor = diff > 0 ? '#4CAF50' : diff < 0 ? '#f44336' : '#666';
            const diffIcon = diff > 0 ? '📈' : diff < 0 ? '📉' : '➡️';
            
            let html = `
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-bottom:20px">
                    <div style="background:#f5f5f5;padding:15px;border-radius:8px;text-align:center">
                        <div style="color:#666;font-size:13px;margin-bottom:5px">初回記録</div>
                        <div style="font-size:24px;font-weight:bold;color:#FF5722">${first.value}</div>
                        <div style="color:#999;font-size:12px">${first.date}</div>
                    </div>
                    <div style="background:#f5f5f5;padding:15px;border-radius:8px;text-align:center">
                        <div style="color:#666;font-size:13px;margin-bottom:5px">最新記録</div>
                        <div style="font-size:24px;font-weight:bold;color:#FF5722">${last.value}</div>
                        <div style="color:#999;font-size:12px">${last.date}</div>
                    </div>
                    <div style="background:#f5f5f5;padding:15px;border-radius:8px;text-align:center">
                        <div style="color:#666;font-size:13px;margin-bottom:5px">伸び ${diffIcon}</div>
                        <div style="font-size:24px;font-weight:bold;color:${diffColor}">${diff > 0 ? '+' : ''}${diff.toFixed(1)}</div>
                        <div style="color:${diffColor};font-size:12px;font-weight:bold">${diff > 0 ? '+' : ''}${diffPercent}%</div>
                    </div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px">
                    <div style="background:#f5f5f5;padding:15px;border-radius:8px">
                        <div style="color:#666;font-size:13px;margin-bottom:8px">📊 統計情報</div>
                        <div style="font-size:14px;line-height:1.8">
                            • 測定回数: ${records.length}回<br>
                            • 平均値: ${avg}<br>
                            • 最高記録: ${max} (${maxRecord.date})
                        </div>
                    </div>
                    <div style="background:#f5f5f5;padding:15px;border-radius:8px">
                        <div style="color:#666;font-size:13px;margin-bottom:8px">💡 分析コメント</div>
                        <div style="font-size:14px;line-height:1.8">
                            ${diff > 0 ? '順調に成長しています！この調子で頑張りましょう🎉' : diff < 0 ? '一時的に下がっていますが、コンディションを整えて再チャレンジ💪' : '記録が安定しています。次のステップを目指しましょう！'}
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById("trackingStats").innerHTML = html;
        }
        
        function updateTrackingList(records, eventName, eventIdx) {
            let html = '<table style="width:100%;border-collapse:collapse">';
            html += '<tr style="background:#FF5722;color:white"><th style="padding:12px">No</th><th>日付</th><th>測定値</th><th>伸び</th><th>単元</th><th>メモ</th><th>操作</th></tr>';
            
            records.forEach((r, i) => {
                const diff = i > 0 ? (r.value - records[i - 1].value).toFixed(1) : '-';
                const diffColor = i > 0 ? (r.value > records[i - 1].value ? '#4CAF50' : r.value < records[i - 1].value ? '#f44336' : '#666') : '#666';
                
                html += `<tr style="border-bottom:1px solid #f0f0f0">
                    <td style="padding:12px;text-align:center;font-weight:bold">${i + 1}</td>
                    <td style="padding:12px;text-align:center">${r.date}</td>
                    <td style="padding:12px;text-align:center;font-weight:bold;color:#FF5722">${r.value}</td>
                    <td style="padding:12px;text-align:center;font-weight:bold;color:${diffColor}">${diff !== '-' && parseFloat(diff) > 0 ? '+' : ''}${diff}</td>
                    <td style="padding:12px;text-align:center">${r.unit || '-'}</td>
                    <td style="padding:12px;text-align:center">${r.memo || '-'}</td>
                    <td style="padding:12px;text-align:center"><button class="btn" style="background:#f44336;padding:6px 12px;font-size:12px" onclick="deleteTrackingRecord(${eventIdx}, ${i})">削除</button></td>
                </tr>`;
            });
            
            html += '</table>';
            
            document.getElementById("trackingList").innerHTML = html;
        }
        
        function deleteTrackingRecord(eventIdx, recordIdx) {
            if (!confirm('この記録を削除しますか？')) return;
            
            const g = document.getElementById("gender").value;
            const key = `tracking-${g}`;
            let trackingData = JSON.parse(localStorage.getItem(key) || '{}');
            
            if (trackingData[eventIdx]) {
                trackingData[eventIdx].splice(recordIdx, 1);
                localStorage.setItem(key, JSON.stringify(trackingData));
                N('記録を削除しました', 'info');
                updateTrackingView();
            }
        }
        
        function RAnalysis(g) {
            const h = D[g].h.slice(0, 9);
            
            // 自分のスコアを取得
            let myScores = [];
            let hasData = false;
            for (let i = 0; i < 9; i++) {
                const inp = document.getElementById(`i${i}`);
                const v = parseFloat(inp.value);
                if (!isNaN(v)) {
                    hasData = true;
                    myScores.push(CS(v, h[i], g));
                } else {
                    myScores.push(0);
                }
            }
            
            if (!hasData) {
                document.getElementById("fitnessPokedex").innerHTML = '<div style="grid-column:1/-1;text-align:center;color:white;opacity:0.8;padding:40px">データを入力すると図鑑が表示されます</div>';
                document.getElementById("totalRank").innerHTML = '';
                document.getElementById("goalSimulator").innerHTML = '';
                return;
            }
            
            // タイプ別レベル計算
            const calcAvg = (indices) => {
                const validScores = indices.map(i => myScores[i]).filter(s => s > 0);
                return validScores.length > 0 ? validScores.reduce((sum, s) => sum + s, 0) / validScores.length : 0;
            };
            
            const powerAvg = calcAvg([0, 7, 8]);
            const enduranceAvg = calcAvg([4, 5]);
            const agilityAvg = calcAvg([3, 6]);
            const flexibilityAvg = calcAvg([1, 2]);
            
            const types = [
                {name: 'パワー型', emoji: '💪', avg: powerAvg, color: '#f5576c'},
                {name: '持久力型', emoji: '🏃', avg: enduranceAvg, color: '#00f2fe'},
                {name: '敏捷性型', emoji: '⚡', avg: agilityAvg, color: '#38f9d7'},
                {name: '柔軟性型', emoji: '🤸', avg: flexibilityAvg, color: '#fee140'}
            ];
            
            // 図鑑表示
            let pokedexHtml = '';
            types.forEach(type => {
                const level = Math.floor(type.avg);
                const progress = (type.avg / 10) * 100;
                const nextLevel = Math.ceil(type.avg);
                const toNext = nextLevel - type.avg;
                
                pokedexHtml += `
                    <div style="background:rgba(255,255,255,0.15);padding:20px;border-radius:12px;backdrop-filter:blur(10px)">
                        <div style="display:flex;align-items:center;margin-bottom:15px">
                            <span style="font-size:36px;margin-right:15px">${type.emoji}</span>
                            <div style="flex:1">
                                <div style="font-size:18px;font-weight:bold;margin-bottom:5px">${type.name}</div>
                                <div style="font-size:24px;font-weight:bold">Lv.${level}</div>
                            </div>
                        </div>
                        <div style="background:rgba(255,255,255,0.3);height:20px;border-radius:10px;overflow:hidden;margin-bottom:8px">
                            <div style="background:${type.color};height:100%;width:${progress}%;transition:width 0.5s"></div>
                        </div>
                        <div style="font-size:13px;opacity:0.9">
                            ${type.avg > 0 ? `${type.avg.toFixed(1)}点 / 10.0点` : 'データなし'}
                            ${toNext > 0 && toNext < 1 ? ` (次のレベルまであと${toNext.toFixed(1)}点！)` : ''}
                        </div>
                    </div>
                `;
            });
            
            document.getElementById("fitnessPokedex").innerHTML = pokedexHtml;
            
            // 総合評価
            const validScores = myScores.filter(s => s > 0);
            const totalScore = validScores.reduce((a, b) => a + b, 0);
            const gr = parseInt(document.getElementById("grade").value);
            let rank = 'E';
            let rankMin = 0, rankMax = 0;
            
            for (let i = 0; i < E.length; i++) {
                const r = E[i];
                const rg = r[`c${gr}`];
                let min, max;
                
                if (rg.includes("以上")) {
                    min = parseFloat(rg);
                    max = Infinity;
                } else if (rg.includes("以下")) {
                    min = -Infinity;
                    max = parseFloat(rg);
                } else if (rg.includes("～")) {
                    [min, max] = rg.split("～").map(Number);
                } else {
                    min = max = parseFloat(rg);
                }
                
                if (totalScore >= min && totalScore <= max) {
                    rank = r.s;
                    rankMin = min;
                    rankMax = max;
                    break;
                }
            }
            
            const nextRankIndex = ['E', 'D', 'C', 'B', 'A'].indexOf(rank) + 1;
            const nextRank = nextRankIndex < 5 ? ['E', 'D', 'C', 'B', 'A'][nextRankIndex] : null;
            const toNextRank = nextRank ? (rankMax + 1 - totalScore) : 0;
            
            let totalHtml = `
                <div style="font-size:28px;margin-bottom:10px">総合評価: ${rank} (${totalScore}点)</div>
                ${nextRank ? `<div style="font-size:16px;opacity:0.9">次の${nextRank}評価まで: あと${toNextRank}点！</div>` : '<div style="font-size:16px;opacity:0.9">最高ランク達成！🎉</div>'}
            `;
            
            document.getElementById("totalRank").innerHTML = totalHtml;
            
            // 初期状態のシミュレーター表示
            document.getElementById("goalSimulator").innerHTML = '<div style="text-align:center;color:#666;padding:40px">上のボタンから目標を選んでください</div>';
        }
        
        function setGoal(goalType) {
            const g = document.getElementById("gender").value;
            const h = D[g].h.slice(0, 9);
            const gr = parseInt(document.getElementById("grade").value);
            
            let myScores = [];
            let myValues = [];
            for (let i = 0; i < 9; i++) {
                const inp = document.getElementById(`i${i}`);
                const v = parseFloat(inp.value);
                myValues.push(!isNaN(v) ? v : 0);
                myScores.push(!isNaN(v) ? CS(v, h[i], g) : 0);
            }
            
            const validScores = myScores.filter(s => s > 0);
            const totalScore = validScores.reduce((a, b) => a + b, 0);
            
            let targetScore = 0;
            let goalTitle = '';
            let goalDesc = '';
            let targetRank = '';
            
            if (goalType === 'rankA') {
                const aRange = E.find(e => e.s === 'A')[`c${gr}`];
                targetScore = parseInt(aRange.replace('以上', ''));
                goalTitle = '🎯 総合A評価を目指す';
                goalDesc = `現在${totalScore}点 → 目標${targetScore}点以上`;
                targetRank = 'A';
            } else if (goalType === 'rankB') {
                const bRange = E.find(e => e.s === 'B')[`c${gr}`];
                targetScore = parseInt(bRange.split('～')[0]);
                goalTitle = '🎯 総合B評価を目指す';
                goalDesc = `現在${totalScore}点 → 目標${targetScore}点以上`;
                targetRank = 'B';
            } else if (goalType === 'rankC') {
                const cRange = E.find(e => e.s === 'C')[`c${gr}`];
                targetScore = parseInt(cRange.split('～')[0]);
                goalTitle = '🎯 総合C評価を目指す';
                goalDesc = `現在${totalScore}点 → 目標${targetScore}点以上`;
                targetRank = 'C';
            } else if (goalType === 'rankD') {
                const dRange = E.find(e => e.s === 'D')[`c${gr}`];
                targetScore = parseInt(dRange.split('～')[0]);
                goalTitle = '🎯 総合D評価を目指す';
                goalDesc = `現在${totalScore}点 → 目標${targetScore}点以上`;
                targetRank = 'D';
            }
            
            const pointsNeeded = Math.max(0, targetScore - totalScore);
            
            let html = `
                <div style="background:white;padding:25px;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.1)">
                    <h5 style="margin:0 0 20px 0;font-size:20px;color:#9c27b0">${goalTitle}</h5>
                    <div style="background:#f5f5f5;padding:15px;border-radius:8px;margin-bottom:20px">
                        <div style="font-size:16px;color:#666;margin-bottom:10px">${goalDesc}</div>
                        <div style="font-size:24px;font-weight:bold;color:#9c27b0">必要な得点: +${pointsNeeded}点</div>
                    </div>
            `;
            
            if (pointsNeeded > 0) {
                html += '<div style="margin-top:20px"><h6 style="color:#9c27b0;margin-bottom:15px;font-size:18px">💡 おすすめの伸ばし方</h6>';
                
                // 持久走とシャトルランのどちらを実施しているか判定
                const hasEndurance = myValues[4] > 0;
                const hasShuttle = myValues[5] > 0;
                
                // 各種目の伸びしろを計算
                const improvements = [];
                h.forEach((header, i) => {
                    // 持久走とシャトルランの処理
                    if (i === 4 && !hasEndurance && hasShuttle) return; // 持久走未実施
                    if (i === 5 && !hasShuttle && hasEndurance) return; // シャトルラン未実施
                    
                    if (myScores[i] < 10 && myScores[i] > 0) {
                        const potential = 10 - myScores[i];
                        const difficulty = myScores[i] >= 7 ? '難しい' : myScores[i] >= 5 ? '普通' : myScores[i] >= 3 ? '簡単！' : 'とても簡単！';
                        const diffColor = myScores[i] >= 7 ? '#f44336' : myScores[i] >= 5 ? '#FF9800' : myScores[i] >= 3 ? '#4CAF50' : '#2196F3';
                        improvements.push({
                            name: header,
                            current: myScores[i],
                            potential: potential,
                            difficulty: difficulty,
                            diffColor: diffColor
                        });
                    }
                });
                
                // 未入力の種目を追加（持久走・シャトルラン以外）
                h.forEach((header, i) => {
                    if (i === 4 && !hasEndurance && hasShuttle) return;
                    if (i === 5 && !hasShuttle && hasEndurance) return;
                    
                    if (myScores[i] === 0) {
                        improvements.push({
                            name: header,
                            current: 0,
                            potential: 10,
                            difficulty: '未測定',
                            diffColor: '#9E9E9E'
                        });
                    }
                });
                
                improvements.sort((a, b) => {
                    if (a.current === 0 && b.current > 0) return 1;
                    if (a.current > 0 && b.current === 0) return -1;
                    return b.potential - a.potential;
                });
                
                let recommendCount = 0;
                let totalRecommend = 0;
                improvements.forEach((imp, idx) => {
                    if (recommendCount < 5 && totalRecommend < pointsNeeded) {
                        const recommend = imp.current === 0 ? 5 : Math.min(2, imp.potential, pointsNeeded - totalRecommend);
                        if (recommend > 0) {
                            html += `
                                <div style="background:#f9f9f9;padding:15px;border-radius:8px;margin-bottom:10px;border-left:4px solid ${imp.diffColor}">
                                    <div style="display:flex;justify-content:space-between;align-items:center">
                                        <div>
                                            <span style="font-weight:bold;font-size:16px">${imp.name}</span>
                                            <span style="color:#666;margin-left:10px">${imp.current === 0 ? '未測定 → 平均5点を目指す' : `現在${imp.current}点 → ${imp.current + recommend}点`}</span>
                                        </div>
                                        <span style="background:${imp.diffColor};color:white;padding:5px 12px;border-radius:20px;font-size:13px;font-weight:bold">${imp.difficulty}</span>
                                    </div>
                                </div>
                            `;
                            recommendCount++;
                            totalRecommend += recommend;
                        }
                    }
                });
                
                html += `<div style="margin-top:20px;padding:15px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:8px;text-align:center;font-size:16px">
                    ✨ これらを達成すれば目標クリア！頑張りましょう！
                </div>`;
                
                html += '</div>';
            } else {
                html += '<div style="padding:20px;background:linear-gradient(135deg,#4CAF50,#66BB6A);color:white;border-radius:8px;text-align:center;font-size:18px">🎉 すでに目標達成しています！素晴らしい！</div>';
            }
            
            html += '</div>';
            
            document.getElementById("goalSimulator").innerHTML = html;
        }
        
        function RCorr(g) {
            const cv = document.getElementById("corr");
            const ctx = cv.getContext("2d");
            const h = D[g].h.slice(0, 9);
            
            // 自分のスコアを取得
            let myScores = [];
            let hasData = false;
            for (let i = 0; i < 9; i++) {
                const inp = document.getElementById(`i${i}`);
                const v = parseFloat(inp.value);
                if (!isNaN(v)) {
                    hasData = true;
                    myScores.push(CS(v, h[i], g));
                } else {
                    myScores.push(0);
                }
            }
            
            ctx.clearRect(0, 0, cv.width, cv.height);
            
            if (!hasData) {
                ctx.fillStyle = '#666';
                ctx.font = '18px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('データを入力すると分析が表示されます', cv.width / 2, cv.height / 2);
                document.getElementById("corrInsights").innerHTML = '';
                document.getElementById("athleteType").innerHTML = '';
                return;
            }
            
            // 相関マトリックスの計算
            const n = h.length;
            const cellSize = 600 / n;
            const p = {t: 80, l: 80};
            
            // 平均からの偏差を計算
            const validScores = myScores.filter(s => s > 0);
            const avg = validScores.reduce((a, b) => a + b, 0) / validScores.length;
            const deviations = myScores.map(s => s > 0 ? s - avg : 0);
            
            // 各セルを描画
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    const x = p.l + j * cellSize;
                    const y = p.t + i * cellSize;
                    
                    if (i === j) {
                        // 対角線（自分自身）
                        if (myScores[i] > 0) {
                            // スコアに応じて色を変える
                            if (myScores[i] >= 8) {
                                ctx.fillStyle = '#1565c0'; // 濃い青
                            } else if (myScores[i] >= 6) {
                                ctx.fillStyle = '#1976d2'; // 中程度の青
                            } else if (myScores[i] >= 4) {
                                ctx.fillStyle = '#42a5f5'; // 明るい青
                            } else {
                                ctx.fillStyle = '#90caf9'; // とても明るい青
                            }
                        } else {
                            ctx.fillStyle = '#e8eaf6';
                        }
                        ctx.fillRect(x, y, cellSize - 2, cellSize - 2);
                        
                        // スコアを表示
                        if (myScores[i] > 0) {
                            ctx.fillStyle = 'white';
                            ctx.font = 'bold 18px Arial';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(myScores[i], x + cellSize / 2, y + cellSize / 2);
                        }
                    } else {
                        // 相関の強さ
                        const corr = (deviations[i] * deviations[j]) / 25;
                        
                        if (myScores[i] === 0 || myScores[j] === 0) {
                            ctx.fillStyle = '#fafafa';
                        } else if (corr > 0.15) {
                            // 正の相関
                            const alpha = Math.min(Math.abs(corr) * 1.2, 0.9);
                            ctx.fillStyle = `rgba(76, 175, 80, ${alpha})`;
                        } else if (corr < -0.15) {
                            // 負の相関
                            const alpha = Math.min(Math.abs(corr) * 1.2, 0.9);
                            ctx.fillStyle = `rgba(244, 67, 54, ${alpha})`;
                        } else {
                            ctx.fillStyle = '#f5f5f5';
                        }
                        
                        ctx.fillRect(x, y, cellSize - 2, cellSize - 2);
                    }
                    
                    // 枠線
                    ctx.strokeStyle = '#ddd';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x, y, cellSize - 2, cellSize - 2);
                }
            }
            
            // ラベル（縦）
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            h.forEach((lb, i) => {
                const label = lb.length > 6 ? lb.substring(0, 5) + '...' : lb;
                ctx.fillText(label, p.l - 8, p.t + i * cellSize + cellSize / 2);
            });
            
            // ラベル（横）
            ctx.save();
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            h.forEach((lb, i) => {
                const label = lb.length > 6 ? lb.substring(0, 5) + '...' : lb;
                ctx.translate(p.l + i * cellSize + cellSize / 2, p.t - 8);
                ctx.rotate(-Math.PI / 4);
                ctx.fillText(label, 0, 0);
                ctx.rotate(Math.PI / 4);
                ctx.translate(-(p.l + i * cellSize + cellSize / 2), -(p.t - 8));
            });
            ctx.restore();
            
            // インサイトを生成
            generateInsights(h, myScores, deviations);
        }
        
        function generateInsights(headers, scores, deviations) {
            // 得意・不得意を判定
            const avg = scores.reduce((a, b) => a + b, 0) / scores.filter(s => s > 0).length;
            const strong = [];
            const weak = [];
            
            headers.forEach((h, i) => {
                if (scores[i] > 0) {
                    if (scores[i] >= avg + 1.5) strong.push({name: h, score: scores[i]});
                    else if (scores[i] <= avg - 1.5) weak.push({name: h, score: scores[i]});
                }
            });
            
            strong.sort((a, b) => b.score - a.score);
            weak.sort((a, b) => a.score - b.score);
            
            let html = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">';
            
            // 得意な種目
            html += '<div style="padding:20px;background:linear-gradient(135deg,#4CAF50,#66BB6A);color:white;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.1)">';
            html += '<h4 style="margin:0 0 15px 0;font-size:18px;display:flex;align-items:center"><span style="font-size:24px;margin-right:10px">💪</span>得意な種目</h4>';
            if (strong.length > 0) {
                html += '<div style="background:rgba(255,255,255,0.2);padding:15px;border-radius:8px">';
                strong.forEach(s => {
                    html += `<div style="margin:8px 0;font-size:16px;display:flex;justify-content:space-between"><span>${s.name}</span><span style="font-weight:bold;font-size:20px">${s.score}点</span></div>`;
                });
                html += '</div>';
            } else {
                html += '<p style="margin:0;opacity:0.9">バランス型です</p>';
            }
            html += '</div>';
            
            // 伸びしろのある種目
            html += '<div style="padding:20px;background:linear-gradient(135deg,#FF9800,#FFA726);color:white;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.1)">';
            html += '<h4 style="margin:0 0 15px 0;font-size:18px;display:flex;align-items:center"><span style="font-size:24px;margin-right:10px">📈</span>伸びしろのある種目</h4>';
            if (weak.length > 0) {
                html += '<div style="background:rgba(255,255,255,0.2);padding:15px;border-radius:8px">';
                weak.forEach(w => {
                    html += `<div style="margin:8px 0;font-size:16px;display:flex;justify-content:space-between"><span>${w.name}</span><span style="font-weight:bold;font-size:20px">${w.score}点</span></div>`;
                });
                html += '</div>';
                html += '<p style="margin:10px 0 0 0;font-size:13px;opacity:0.9">💡 トレーニングで大きく向上可能！</p>';
            } else {
                html += '<p style="margin:0;opacity:0.9">全体的に高水準です</p>';
            }
            html += '</div>';
            
            html += '</div>';
            
            document.getElementById("corrInsights").innerHTML = html;
            
            // タイプ診断
            determineAthleteType(headers, scores, strong, weak);
        }
        
        function determineAthleteType(headers, scores, strong, weak) {
            // 各カテゴリのスコアを計算（0点は除外）
            const powerScores = [0, 7, 8]; // 握力、立ち幅跳び、ハンドボール投げ
            const enduranceScores = [4, 5]; // 持久走、シャトルラン
            const agilityScores = [3, 6]; // 反復横とび、50m走
            const flexibilityScores = [1, 2]; // 上体起こし、長座体前屈
            
            const calcAvg = (indices) => {
                const validScores = indices.map(i => scores[i]).filter(s => s > 0);
                return validScores.length > 0 ? validScores.reduce((sum, s) => sum + s, 0) / validScores.length : 0;
            };
            
            const powerAvg = calcAvg(powerScores);
            const enduranceAvg = calcAvg(enduranceScores);
            const agilityAvg = calcAvg(agilityScores);
            const flexibilityAvg = calcAvg(flexibilityScores);
            
            const categories = [
                {name: 'パワー', avg: powerAvg, emoji: '💪', color: 'linear-gradient(135deg,#f093fb,#f5576c)'},
                {name: '持久力', avg: enduranceAvg, emoji: '🏃', color: 'linear-gradient(135deg,#4facfe,#00f2fe)'},
                {name: '敏捷性', avg: agilityAvg, emoji: '⚡', color: 'linear-gradient(135deg,#43e97b,#38f9d7)'},
                {name: '柔軟性', avg: flexibilityAvg, emoji: '🤸', color: 'linear-gradient(135deg,#fa709a,#fee140)'}
            ];
            
            categories.sort((a, b) => b.avg - a.avg);
            
            const validScores = scores.filter(s => s > 0);
            const totalAvg = validScores.reduce((a, b) => a + b, 0) / validScores.length;
            const variance = validScores.reduce((sum, s) => sum + Math.pow(s - totalAvg, 2), 0) / validScores.length;
            const stdDev = Math.sqrt(variance);
            
            let typeHtml = '<div style="text-align:center">';
            typeHtml += `<div style="font-size:48px;margin-bottom:15px">${categories[0].emoji}</div>`;
            
            if (stdDev < 1.5) {
                // バランス型
                typeHtml += '<div style="font-size:28px;font-weight:bold;margin-bottom:10px">🌟 オールラウンダー型</div>';
                typeHtml += '<p style="font-size:16px;margin:0;opacity:0.95">全ての能力がバランスよく備わっています！<br>総合的な運動能力が高い優秀なアスリートタイプです。</p>';
            } else if (categories[0].avg >= totalAvg + 1 && categories[0].avg > 0) {
                // 特化型
                typeHtml += `<div style="font-size:28px;font-weight:bold;margin-bottom:10px">${categories[0].emoji} ${categories[0].name}特化型</div>`;
                typeHtml += `<p style="font-size:16px;margin:0;opacity:0.95">${categories[0].name}が際立って優れています！<br>`;
                
                if (categories[0].name === 'パワー') {
                    typeHtml += '瞬発力を活かした競技（短距離走、投擲、跳躍）に向いています。';
                } else if (categories[0].name === '持久力') {
                    typeHtml += '長距離走やマラソンなど持久系競技に適性があります。';
                } else if (categories[0].name === '敏捷性') {
                    typeHtml += 'サッカーやバスケなど素早い動きが必要な競技が得意です。';
                } else if (categories[0].name === '柔軟性') {
                    typeHtml += '体操や武道など柔軟性が重要な競技に向いています。';
                }
                typeHtml += '</p>';
            } else {
                // 成長型
                typeHtml += '<div style="font-size:28px;font-weight:bold;margin-bottom:10px">🌱 成長型アスリート</div>';
                typeHtml += '<p style="font-size:16px;margin:0;opacity:0.95">多様な能力を持つ発展途上タイプ！<br>トレーニング次第でさらなる飛躍が期待できます。</p>';
            }
            
            typeHtml += `<div style="margin-top:20px;padding-top:20px;border-top:2px solid rgba(255,255,255,0.3)">`;
            typeHtml += '<div style="font-size:14px;opacity:0.9">能力分布</div>';
            typeHtml += '<div style="display:flex;justify-content:center;gap:20px;margin-top:10px;flex-wrap:wrap">';
            categories.forEach(cat => {
                if (cat.avg > 0) {
                    typeHtml += `<div style="text-align:center"><div style="font-size:24px">${cat.emoji}</div><div style="font-size:12px;margin-top:5px">${cat.name}</div><div style="font-size:18px;font-weight:bold">${cat.avg.toFixed(1)}点</div></div>`;
                } else {
                    typeHtml += `<div style="text-align:center;opacity:0.5"><div style="font-size:24px">${cat.emoji}</div><div style="font-size:12px;margin-top:5px">${cat.name}</div><div style="font-size:18px;font-weight:bold">-</div></div>`;
                }
            });
            typeHtml += '</div></div>';
            
            typeHtml += '</div>';
            
            document.getElementById("athleteType").innerHTML = typeHtml;
        }
        
        let radarVisible = [true, true, true, true, true];
        
        function RR(g) {
            const cv = document.getElementById("rc");
            const ctx = cv.getContext("2d");
            const h = D[g].h.slice(0, 9);
            const cols = [
                {s: "rgba(255,99,132,1)", f: "rgba(255,99,132,0.2)"},
                {s: "rgba(54,162,235,1)", f: "rgba(54,162,235,0.2)"},
                {s: "rgba(75,192,192,1)", f: "rgba(75,192,192,0.2)"},
                {s: "rgba(255,206,86,1)", f: "rgba(255,206,86,0.2)"},
                {s: "rgba(153,102,255,0.5)", f: "rgba(153,102,255,0.1)"}
            ];
            
            const rs = [];
            ["帯広市", "北海道", "全国"].forEach(rg => {
                rs.push(h.map((x, i) => CS(A[g][rg][i], x, g)));
            });
            
            rs.push(h.map((x, i) => {
                const inp = document.getElementById(`i${i}`);
                if (!inp) return 0;
                const v = parseFloat(inp.value);
                return isNaN(v) ? 0 : CS(v, x, g);
            }));
            
            const gr = document.getElementById("grade").value;
            const k = `y-${g}`;
            const yd = JSON.parse(localStorage.getItem(k) || '{}');
            const pg = gr === '2' ? '中1' : gr === '3' ? '中2' : null;
            let ps = null;
            
            if (pg && yd[pg]) {
                ps = h.map((x, i) => CS(yd[pg].v[i], x, g));
            }
            
            ctx.clearRect(0, 0, cv.width, cv.height);
            
            const cX = cv.width / 2;
            const cY = cv.height / 2;
            const rad = 220;
            const as = (Math.PI * 2) / h.length;
            
            ctx.strokeStyle = "#e0e0e0";
            ctx.lineWidth = 1;
            for (let i = 1; i <= 10; i++) {
                ctx.beginPath();
                ctx.arc(cX, cY, (rad / 10) * i, 0, Math.PI * 2);
                ctx.stroke();
            }
            
            ctx.strokeStyle = "#ccc";
            h.forEach((lb, i) => {
                const a = as * i - Math.PI / 2;
                const x = cX + Math.cos(a) * rad;
                const y = cY + Math.sin(a) * rad;
                ctx.beginPath();
                ctx.moveTo(cX, cY);
                ctx.lineTo(x, y);
                ctx.stroke();
                
                ctx.fillStyle = "#333";
                ctx.font = "12px Arial";
                ctx.textAlign = "center";
                ctx.fillText(lb, cX + Math.cos(a) * (rad + 40), cY + Math.sin(a) * (rad + 40));
            });
            
            if (ps && radarVisible[4]) {
                ctx.fillStyle = cols[4].f;
                ctx.beginPath();
                ps.forEach((sc, i) => {
                    const a = as * i - Math.PI / 2;
                    const x = cX + Math.cos(a) * ((rad / 10) * sc);
                    const y = cY + Math.sin(a) * ((rad / 10) * sc);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                });
                ctx.closePath();
                ctx.fill();
                
                ctx.strokeStyle = cols[4].s;
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ps.forEach((sc, i) => {
                    const a = as * i - Math.PI / 2;
                    const x = cX + Math.cos(a) * ((rad / 10) * sc);
                    const y = cY + Math.sin(a) * ((rad / 10) * sc);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                });
                ctx.closePath();
                ctx.stroke();
                ctx.setLineDash([]);
            }
            
            rs.forEach((scs, ri) => {
                if (!radarVisible[ri]) return;
                const c = cols[ri];
                
                ctx.fillStyle = c.f;
                ctx.beginPath();
                scs.forEach((sc, i) => {
                    const a = as * i - Math.PI / 2;
                    const x = cX + Math.cos(a) * ((rad / 10) * sc);
                    const y = cY + Math.sin(a) * ((rad / 10) * sc);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                });
                ctx.closePath();
                ctx.fill();
                
                ctx.strokeStyle = c.s;
                ctx.lineWidth = 2;
                ctx.beginPath();
                scs.forEach((sc, i) => {
                    const a = as * i - Math.PI / 2;
                    const x = cX + Math.cos(a) * ((rad / 10) * sc);
                    const y = cY + Math.sin(a) * ((rad / 10) * sc);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                });
                ctx.closePath();
                ctx.stroke();
                
                ctx.fillStyle = c.s;
                scs.forEach((sc, i) => {
                    const a = as * i - Math.PI / 2;
                    const x = cX + Math.cos(a) * ((rad / 10) * sc);
                    const y = cY + Math.sin(a) * ((rad / 10) * sc);
                    ctx.beginPath();
                    ctx.arc(x, y, 4, 0, Math.PI * 2);
                    ctx.fill();
                });
            });
            
            const lY = cv.height - 40;
            const regs = ["帯広市", "北海道", "全国", "自分"];
            if (ps) regs.push(`去年(${pg})`);
            
            regs.forEach((rg, i) => {
                const lX = cX - 180 + i * 90;
                ctx.fillStyle = radarVisible[i] ? cols[i].s : "#ccc";
                ctx.fillRect(lX - 30, lY, 20, 10);
                ctx.fillStyle = radarVisible[i] ? "#333" : "#999";
                ctx.font = "14px Arial";
                ctx.textAlign = "left";
                ctx.fillText(rg, lX, lY + 10);
            });
            
            cv.onclick = e => {
                const rect = cv.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                regs.forEach((rg, i) => {
                    const lX = cX - 180 + i * 90;
                    if (x >= lX - 30 && x <= lX + 60 && y >= lY - 5 && y <= lY + 15) {
                        radarVisible[i] = !radarVisible[i];
                        RR(g);
                    }
                });
            };
            cv.style.cursor = 'pointer';
        }
        
        function RG(g) {
            const cv = document.getElementById("gc");
            const ctx = cv.getContext("2d");
            const h = D[g].h.slice(0, 9);
            const k = `y-${g}`;
            const yd = JSON.parse(localStorage.getItem(k) || '{}');
            
            ctx.clearRect(0, 0, cv.width, cv.height);
            
            const grs = ['中1', '中2', '中3'];
            const cols = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF', '#4BC0C0'];
            const p = {t: 40, r: 100, b: 60, l: 60};
            const cW = cv.width - p.l - p.r;
            const cH = cv.height - p.t - p.b;
            
            ctx.strokeStyle = '#ccc';
            ctx.lineWidth = 1;
            for (let i = 0; i <= 3; i++) {
                const x = p.l + i * (cW / 3);
                ctx.beginPath();
                ctx.moveTo(x, p.t);
                ctx.lineTo(x, p.t + cH);
                ctx.stroke();
            }
            
            ctx.fillStyle = '#333';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            grs.forEach((gr, i) => {
                ctx.fillText(gr, p.l + i * (cW / 3), cv.height - p.b + 25);
            });
            
            h.forEach((lb, idx) => {
                const cl = cols[idx];
                ctx.strokeStyle = cl;
                ctx.fillStyle = cl;
                ctx.lineWidth = 2;
                
                let pts = [];
                grs.forEach((gr, gi) => {
                    if (yd[gr]) {
                        const vl = yd[gr].v[idx];
                        const sc = CS(vl, lb, g);
                        const x = p.l + gi * (cW / 3);
                        const y = p.t + cH - (sc / 10) * cH;
                        pts.push({x, y, val: vl});
                    }
                });
                
                if (pts.length > 1) {
                    ctx.beginPath();
                    pts.forEach((pt, i) => {
                        if (i === 0) ctx.moveTo(pt.x, pt.y);
                        else ctx.lineTo(pt.x, pt.y);
                    });
                    ctx.stroke();
                }
                
                pts.forEach(pt => {
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = '#333';
                    ctx.font = '11px Arial';
                    ctx.fillText(pt.val, pt.x, pt.y - 10);
                    ctx.fillStyle = cl;
                });
            });
            
            const lX = cv.width - p.r + 10;
            let lY = p.t;
            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            h.forEach((lb, idx) => {
                ctx.fillStyle = cols[idx];
                ctx.fillRect(lX, lY, 15, 10);
                ctx.fillStyle = '#333';
                ctx.fillText(lb, lX + 20, lY + 9);
                lY += 20;
            });
        }
        
        document.getElementById("gender").addEventListener("change", () => {
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
        
        RT();
        RS();
        RE();
        LI();
        
        // ステップ2: ステップ切り替え機能
        let currentStep = 0;
        
        function testModal() {
            console.log('testModal関数が呼ばれました');
            N('初回設定ガイドを開きます', 'success');
            
            currentStep = 0; // 初期化
            const modal = document.getElementById('setupModal');
            
            if (modal) {
                modal.style.display = 'block';
                renderCurrentStep();
                console.log('モーダルを表示しました');
            } else {
                console.error('setupModal要素が見つかりません');
                N('モーダル要素が見つかりません', 'error');
            }
        }
        
        function closeTestModal() {
            console.log('closeTestModal関数が呼ばれました');
            const modal = document.getElementById('setupModal');
            if (modal) {
                modal.style.display = 'none';
                console.log('モーダルを閉じました');
            }
        }
        
        function nextStep() {
            currentStep++;
            console.log('次のステップへ:', currentStep);
            renderCurrentStep();
        }
        
        function prevStep() {
            currentStep--;
            console.log('前のステップへ:', currentStep);
            renderCurrentStep();
        }
        
        function renderCurrentStep() {
            const content = document.getElementById('setupContent');
            if (!content) return;
            
            console.log('ステップを描画:', currentStep);
            
            // ステップごとの内容
            const steps = [
                // ステップ0: 開始画面
                `<div style="text-align:center">
                    <h2 style="color:#FF5722;font-size:32px;margin-bottom:20px">🎯 初回設定ガイド</h2>
                    <p style="font-size:18px;line-height:1.8;color:#666;margin-bottom:30px">
                        生徒から送られてくる記録を<br>
                        あなたのGoogleスプレッドシートで<br>
                        自動管理できるようにします！
                    </p>
                    <div style="background:#f5f5f5;padding:20px;border-radius:12px;margin-bottom:30px">
                        <p style="margin:10px 0">⏱️ <strong>所要時間:</strong> 約15～20分</p>
                        <p style="margin:10px 0">🔧 <strong>必要なもの:</strong> Googleアカウント</p>
                    </div>
                    <div style="margin-top:40px">
                        <button class="btn" style="background:linear-gradient(135deg,#FF5722,#FF7043);font-size:18px;padding:15px 50px" onclick="nextStep()">はじめる ▶</button>
                    </div>
                    <div style="margin-top:20px">
                        <button class="btn" style="background:#999;padding:10px 30px" onclick="closeTestModal()">キャンセル</button>
                    </div>
                </div>`,
                
                // ステップ1: URL入力画面
                `<div>
                    <h3 style="color:#FF5722;margin-bottom:20px">🔗 スプレッドシートURL登録</h3>
                    <div style="background:#fff3e0;padding:20px;border-radius:12px;border-left:5px solid #FF5722;margin-bottom:20px">
                        <p style="margin:0;font-weight:bold">✅ Google Apps ScriptのURLを入力してください</p>
                    </div>
                    <p style="font-size:16px;line-height:1.8;margin-bottom:20px">
                        デプロイで取得した「ウェブアプリURL」を下の欄に貼り付けてください：
                    </p>
                    <div style="margin:20px 0">
                        <input type="text" id="teacherUrlInput" placeholder="https://script.google.com/macros/s/.../exec" 
                               style="width:100%;padding:15px;border:2px solid #FF5722;border-radius:8px;font-size:14px;box-sizing:border-box">
                    </div>
                    <p style="color:#666;font-size:14px;margin-top:10px">
                        ※ URLは「https://script.google.com/」で始まり「/exec」で終わります
                    </p>
                    <div style="margin-top:30px;display:flex;justify-content:space-between">
                        <button class="btn" style="background:#999" onclick="prevStep()">◀ 戻る</button>
                        <button class="btn" style="background:linear-gradient(135deg,#4CAF50,#66BB6A)" onclick="saveUrlAndNext()">保存して次へ ▶</button>
                    </div>
                </div>`,
                
                // ステップ2: 保存確認画面
                `<div>
                    <h3 style="color:#4CAF50;margin-bottom:20px">✅ 保存確認</h3>
                    <div style="background:#e8f5e9;padding:20px;border-radius:12px;margin-bottom:20px">
                        <p style="margin:0 0 10px 0;font-weight:bold">保存されたURL:</p>
                        <div style="background:white;padding:10px;border-radius:8px;word-break:break-all;font-size:13px;color:#1976d2">
                            ${localStorage.getItem('teacherScriptUrl') || '（未保存）'}
                        </div>
                    </div>
                    <p style="margin-top:20px;line-height:1.8">
                        このURLが正しく保存されました。<br>
                        次のステップで生徒配布用URLを生成します。
                    </p>
                    <div style="margin-top:30px;display:flex;justify-content:space-between">
                        <button class="btn" style="background:#999" onclick="prevStep()">◀ 戻る</button>
                        <button class="btn" style="background:linear-gradient(135deg,#FF5722,#FF7043)" onclick="nextStep()">次へ ▶</button>
                    </div>
                </div>`,
                
                // ステップ3: 完了画面（次のステップで実装予定）
                `<div style="text-align:center">
                    <h2 style="color:#4CAF50;font-size:32px;margin-bottom:20px">🎉 設定完了！</h2>
                    <p style="font-size:18px;margin:20px 0">URL保存機能が正常に動作しています！</p>
                    <div style="margin-top:40px">
                        <button class="btn" style="background:linear-gradient(135deg,#4CAF50,#66BB6A);padding:15px 40px" onclick="closeTestModal()">完了</button>
                    </div>
                    <div style="margin-top:20px">
                        <button class="btn" style="background:#999;padding:10px 30px" onclick="prevStep()">◀ 戻る</button>
                    </div>
                </div>`
            ];
            
            // ステップの範囲チェック
            if (currentStep < 0) currentStep = 0;
            if (currentStep >= steps.length) currentStep = steps.length - 1;
            
            // 内容を表示
            content.innerHTML = steps[currentStep];
        }
        
        function saveUrlAndNext() {
            const urlInput = document.getElementById('teacherUrlInput');
            if (!urlInput) {
                N('入力欄が見つかりません', 'error');
                return;
            }
            
            const url = urlInput.value.trim();
            
            // バリデーション
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
            
            // localStorageに保存
            try {
                localStorage.setItem('teacherScriptUrl', url);
                console.log('URLを保存しました:', url);
                N('URLを保存しました！', 'success');
                
                // 次のステップへ
                setTimeout(() => {
                    nextStep();
                }, 500);
            } catch (e) {
                console.error('保存エラー:', e);
                N('保存に失敗しました', 'error');
            }
        }


// ページ読み込み完了時に実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', masterInit);
} else {
    masterInit();
}
/* --- ここから下を script.js の一番最後に貼り付け（上書き） --- */

function masterInit() {
    console.log("初期化システム起動...");
    
    // 1. 各種表の描画を実行
    if (typeof RT === 'function') RT(); 
    if (typeof RS === 'function') RS(); 
    if (typeof RE === 'function') RE(); 
    
    // 2. データの読み込み
    if (typeof LI === 'function') LI();

    // 3. 種目名リストの作成（トラッキング用）
    const eventNames = ["握力", "上体起こし", "長座体前屈", "反復横とび", "持久走", "20mシャトルラン", "50m走", "立ち幅跳び", "ハンドボール投げ"];
    const tEvent = document.getElementById('trackingEvent');
    const tView = document.getElementById('trackingViewEvent');
    
    if (tEvent && tView) {
        const options = eventNames.map((e, i) => `<option value="${i}">${e}</option>`).join('');
        tEvent.innerHTML = options;
        tView.innerHTML = options;
    }

    // 4. トラッキング表示の更新（保存データがある場合）
    if (typeof updateTrackingView === 'function') {
        updateTrackingView();
    }
    
    console.log("すべての表と機能を正常に起動しました");
}

// ブラウザに「準備ができたら masterInit を動かせ」と命令する（最も確実な方法）
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', masterInit);
} else {
    masterInit();
}
/* --- script.js の一番最後に貼り付け --- */

/* --- 最終手段：経年変化リセット（全パターン対応版） --- */
function clearYearlyData() {
    if (confirm('【最終確認】過去の全履歴を完全に消去します。よろしいですか？')) {
        
        // 考えられるすべての保存名を一斉に削除します
        const keys = [
            'fitnessHistory', 
            'yearlyData', 
            'fitness_history', 
            'fitnessDataHistory', 
            'history'
        ];
        
        keys.forEach(key => localStorage.removeItem(key));
        
        // 【重要】画面を真っ白にするためにページを完全にリフレッシュ
        alert('データを抹消しました。ページを再読み込みします。');
        window.location.href = window.location.href; 
    }
}

// トラッキングリセット
function clearTrackingData() {
    if (confirm('【注意】「種目別トラッキング」の全データを削除しますか？')) {
        localStorage.removeItem('tracking-male');
        localStorage.removeItem('tracking-female');
        N('トラッキングデータをリセットしました', 'info');
        if (typeof updateTrackingView === 'function') updateTrackingView();
    }
}

// 起動スイッチ
function masterInit() {
    if (typeof RT === 'function') RT(); 
    if (typeof RS === 'function') RS(); 
    if (typeof RE === 'function') RE(); 
    if (typeof LI === 'function') LI();

    const evs = ["握力", "上体起こし", "長座体前屈", "反復横とび", "持久走", "20mシャトルラン", "50m走", "立ち幅跳び", "ハンドボール投げ"];
    const tEvent = document.getElementById('trackingEvent');
    const tView = document.getElementById('trackingViewEvent');
    if (tEvent && tView) {
        const options = evs.map((e, i) => `<option value="${i}">${e}</option>`).join('');
        tEvent.innerHTML = options;
        tView.innerHTML = options;
    }
    if (typeof updateTrackingView === 'function') updateTrackingView();
}

window.addEventListener('DOMContentLoaded', masterInit);

/* --- 【整理済み】これだけを末尾に残してください --- */

// 経年変化（FH）のリセット
function clearYearlyData() {
    if (confirm('経年変化の履歴をすべて削除しますか？')) {
        // 保存名 FH と yearlyData の両方を空にする
        localStorage.removeItem('FH'); 
        localStorage.setItem('FH', JSON.stringify([])); 
        localStorage.removeItem('yearlyData');
        alert('履歴を削除しました。');
        location.reload();
    }
}

// トラッキングデータのリセット
function clearTrackingData() {
    if (confirm('トラッキングデータをすべて削除しますか？')) {
        localStorage.removeItem('tracking-male');
        localStorage.removeItem('tracking-female');
        alert('トラッキングデータを削除しました。');
        if (typeof updateTrackingView === 'function') updateTrackingView();
    }
}

// すべての起動処理をまとめる
function masterInit() {
    // 既存機能の呼び出し
    if (typeof RT === 'function') RT(); 
    if (typeof RS === 'function') RS(); 
    if (typeof LI === 'function') LI();

    // 種目リストの初期化
    const eventNames = ["握力", "上体起こし", "長座体前屈", "反復横とび", "持久走", "20mシャトルラン", "50m走", "立ち幅跳び", "ハンドボール投げ"];
    const tE = document.getElementById('trackingEvent');
    const tV = document.getElementById('trackingViewEvent');
    if (tE && tV) {
        const opt = eventNames.map((e, i) => `<option value="${i}">${e}</option>`).join('');
        tE.innerHTML = opt; 
        tV.innerHTML = opt;
    }
    if (typeof updateTrackingView === 'function') updateTrackingView();
}

// 最後に1回だけ登録
window.addEventListener('DOMContentLoaded', masterInit);
