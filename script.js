<html lang="en">
    

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>okay.</title>
    <style>
        h1 {
            font-size: 50px;
            text-align: center;
            color: #000;
            max-width: 100%;
        }

        div.centerText {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        * {
            font-family: system-ui;
        }

        div.page {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .center {
            text-align: center;
        }

        input {
            text-align: center;
            position: absolute;
            left: 50%;
            bottom: 20px;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 50px;
            border-radius: 50px;
            border: 2px solid #000;
            background: #fff;
            color: #000;

        }

        .page1 {
            background: #000;

        }

        .page1 {
            color: white;
        }

        button.enter {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50px;
            padding: 15px 50px;
            background: #000;
            outline: none;
            border: 2px solid #ffffff;
            color: #ffffff;

        }

        button.enter:hover {
            background-color: white;
            color: black;
            outline: rgb(255, 255, 255) 4px solid;
            border: 2px solid #000000;
        }

        button {
            transition-duration: .3s;
            cursor: pointer;
        }

        button.primary {
            width: 200px;
            left: 50%;
            transform: translateX(-50%);
            position: relative;
            border-radius: 50px;
            padding: 10px 20px;
            background: #000;
            outline: none;
            border: 2px solid #ffffff;
            color: #ffffff;

            outline: rgb(0, 0, 0) 1px solid;

        }

        button.primary:hover {
            background-color: white;
            color: black;
            outline: black 1px solid;
            border: 2px solid #ffffff;
        }

        button.saveThisUser {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 20px;
            width: auto !important;
        }

        button.okay,
        button.okay:hover {
            background-color: green !important;
            color: white;
        }

        .h3active {
            position: absolute;
            text-align: center;
            right: 0;
            left: 0;
            top: 0;
            font-size: 22px;

        }
    </style>
</head>

<body>
    <div class="page1 page">

        <h1></h1>
        <p class="center">V1.1.0</p>
        <h1 style="color: white;" class="page1h1"></h1>

        <input type="text" name="" id="" placeholder="Enter the password"
            onkeydown="if(event.key === 'Enter') { passwordLogged(); }">

        <button onclick=" passwordLogged();" class="enter">Log In</button>





    </div>
    <div class="page2 page">


        <h3 style="text-align: center;transition:.3s;
        position: absolute;
        text-align: center;
        right: 0;
        left: 0;
        top: 0;" class="page2h3">Lkh的群</h3>
        <div class="centerText">
            <h1 contenteditable="true" onkeydown="changeColor()" style="color: red;" id="title">???</h1>
            <script>
                const title = document.getElementById('title');
                const colors = ['rgb(140, 0, 0)', 'rgb(140, 107, 0)', 'rgb(115, 144, 0)', 'rgb(0, 97, 0)', 'rgb(0, 104, 107)', 'rgb(0, 36, 107)', 'rgb(68, 0, 171)', 'rgb(105, 0, 185)', 'rgb(185, 0, 179)', 'rgb(185, 0, 114)', 'rgb(185, 0, 0)'];
                let i = 0;

                function changeColor() {
                    title.style.color = colors[i];
                    i = (i + 1) % colors.length;
                }
            </script>
            <button class="primary saveTitle" onclick="saveText(this);">储存</button>
            <button onclick="rememberThisUser(this);" class="primary saveThisUser">记得我，以后password不用打。</button>

        </div>
        <input id="messageInput" type="text" placeholder="Type a message">
        <button onclick="sendMessage()">Send</button>
        <div id="chat"></div>

    </div>

    <script>


        const pageOne = document.querySelector('.page1');
        const pageTwo = document.querySelector('.page2');


        page(1);

        function page(x) {
            if (x === 1) {
                pageOne.style.display = 'block';
                pageTwo.style.display = 'none';

            }
            if (x === 2) {
                pageOne.style.display = 'none';
                pageTwo.style.display = 'block';

            }
        }

        function passwordLogged() {
            if (document.querySelector('input').value === '相亲相爱麻将馆') {
                page(2);
            } else if (document.querySelector('input').value === '') {
                alert('Please enter the password!');
            } else if (document.querySelector('input').value === 'forget') {
                alert('walaueh 你不记得了啊 相亲相爱麻将馆 不是meh');
            }
            else {
                alert('Wrong password!');
            }
        }

        function saveText(el) {
            el.innerHTML = '储存中……'
            const title = document.getElementById('title').innerHTML;
            localStorage.setItem('titleText', title);
            setTimeout(() => {
                el.innerHTML = '储存完毕'
                setTimeout(() => {
                    el.innerHTML = '点我储存';
                }, 1000);
            }, 1000);
        }


        const titleText = localStorage.getItem('titleText');
        if (titleText) {
            document.getElementById('title').innerHTML = titleText;

        } else {
            document.getElementById('title').innerHTML = `刘庆丰是给。  <br><span style="font-size:20px;">现在你可以储存自己写的hambalang。</span>`;
        }
        document.getElementById('title').style.color = 'black';
        document.querySelector('.saveTitle').innerHTML = '点我储存';


        function clear() {
            localStorage.removeItem('titleText');
            localStorage.removeItem('rememberThisUser');
        }

        function rememberThisUser(el) {
            el.classList.add('okay');
            el.innerHTML = 'okay 我记得你了 人类'
            setTimeout(() => {
                el.remove();
            }, 1500);
            localStorage.setItem('rememberThisUser', 'yes');
        }

        if (localStorage.getItem('rememberThisUser') === 'yes') {
            page(2);
            document.querySelector('.saveThisUser').remove();
        } else {
            localStorage.setItem('rememberThisUser', 'no');
        }


    </script>
    <script>
        const h1 = document.querySelector('h1.page1h1');
        const h3 = document.querySelector('h3.page2h3');
        const texts = ['Lkh的群', 'Lzh的群', 'Ltc的群', 'Cex的群', 'Ljl的群', 'Wzh的群'];
        let g = 0;

        function changeText() {
            h1.innerHTML = texts[g];
            h3.innerHTML = texts[g];
            h3.classList.toggle('h3active');
            g = (g + 1) % texts.length;
        }

        setInterval(changeText, 300);





    </script>
</body>

</html>
