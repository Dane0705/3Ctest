var data =[
    {
    orderNumber:'C1200801298',
    orderDate:'2020/8/12',
    orderPayment:'刷卡',
    orderDollars:'$599元',
    orderSituation:'已付款',
    orderRecipient:'鄭岳洋',
    orderPhone:'0912344537',
    orderAddress:'桃園市1234556576',
    orderInfo:'ABC1233454454',
    orderDelivery:'已到貨',
    orderCancel:'-',
    orderProduct:'https://www.sanjing3c.com.tw/data/sp_images/202009/QNBLG004A-SP1.jpg',
    orderProName:'[ TP-LINK ]Archer C20 AC750 無線雙頻路由器V4',
    orderCount:'1'
    },
    {
    orderNumber:'C1200801293',
    orderDate:'2020/8/05',
    orderPayment:'付現',
    orderDollars:'$788元',
    orderSituation:'已付款',
    orderRecipient:'鄭oo',
    orderPhone:'0912344547',
    orderAddress:'桃園市1234556576',
    orderInfo:'ABC1233454454',
    orderDelivery:'未到貨',
    orderCancel:'-',
    orderProduct:'http://www.sanjing3c.com.tw/data/images/202002/QCGA4537.jpg'
    },
    {
    orderNumber:'C8888888888',
    orderDate:'2020/7/11',
    orderPayment:'刷卡',
    orderDollars:'$599元',
    orderSituation:'已付款',
    orderRecipient:'鄭xx',
    orderPhone:'0912344557',
    orderAddress:'桃園市1dfdfdf6576',
    orderInfo:'ABC1233454454',
    orderDelivery:'已到貨',
    orderCancel:'-',
    orderProduct:'http://www.sanjing3c.com.tw/data/images/201808/CBAS68.jpg'
}]

let modalTable= document.getElementById('modal-table');
let soildTable = document.getElementById('soild-table');
let foo = soildTable.children;





ID.addEventLister('click',modal,false);

data.forEach(function(e){
    console.log(e.orderNumber)
})

// const dateTime = Date.now();
// const timestamp = Math.floor(dateTime/1000);

Array.from(foo).forEach(e=>{
    e.setAttribute('id',data.forEach(function(i){

    }));
})



function modalFun(){
    let str='';
    for(let i = 0; i<data.length;i++){
        if(ID.firstElementChild.textContent == data[i].orderNumber){
            str +=`
                <tbody>
                    <tr>
                        <td style="border-top: none;">訂單編號</td>
                        <td style="width: 230px;border-top: none">${data[i].orderNumber}</td>
                    </tr>
                    <tr>
                        <td>訂購日期</td>
                        <td>${data[i].orderDate}</td>
                    </tr>
                    <tr>
                        <td>付款方式</td>
                        <td>${data[i].orderPayment}</td>
                    </tr>
                    <tr>
                        <td>訂購金額</td>
                        <td>${data[i].orderDollars}</td>
                    </tr>
                    <tr>
                        <td>訂單狀態</td>
                        <td>${data[i].orderSituation}</td>
                    </tr>
                    <tr>
                        <td>收件人</td>
                        <td>${data[i].orderRecipient}</td>
                    </tr>
                    <tr>
                        <td>收件人電話</td>
                        <td>${data[i].orderPhone}</td>
                    </tr>
                    <tr>
                        <td>收件人地址</td>
                        <td>${data[i].orderAddress}</td>
                    </tr>
                    <tr>
                        <td>發票資訊</td>
                        <td>${data[i].orderInfo}</td>
                    </tr>
                    <tr>
                        <td>貨運狀態</td>
                        <td>${data[i].orderDelivery}</td>
                    </tr>
                    <tr>
                        <td>取消/退貨</td>
                        <td>${data[i].orderCancel}</td>
                    </tr>
                    <tr>
                        <td>商品資料 :</td>
                        <td id="order-product">
                        <img src="${data[i].orderProduct}" alt="">
                        <p class="m-0 mt-1">${data[i].orderProName}</p>
                        <p class="countPrice m-0">
                            <span class="count">數量 : ${data[i].orderCount}</span> <span class="price">總價 : ${data[i].orderDollars}</span>
                        </p>
                    </tr>
                </tbody> 
            `
        }
        modalTable.innerHTML=str;
    }
}




