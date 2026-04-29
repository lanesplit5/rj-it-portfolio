const ctx=document.getElementById('chart');
new Chart(ctx,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May'],datasets:[{label:'Tasks',data:[10,20,30,25,40],borderColor:'#ff7a18',fill:true}]}});

const social=document.getElementById('socialChart');
new Chart(social,{type:'doughnut',data:{labels:['Content','Engagement','Analytics','Growth'],datasets:[{data:[30,25,20,25],backgroundColor:['#ff7a18','#3b82f6','#22c55e','#eab308']}]}});

const data={'2023':{Tech:200,Office:150,Furniture:100},'2024':{Tech:400,Office:300,Furniture:200},'2025':{Tech:650,Office:500,Furniture:350}};
function update(){let y=document.getElementById('year').value;let c=document.getElementById('category').value;document.getElementById('result').innerText='Sales: $'+data[y][c];}
document.getElementById('year').onchange=update;
document.getElementById('category').onchange=update;
update();
