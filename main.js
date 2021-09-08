'use strict';

let a = 1
while (a==1) {
            let pswd = prompt("パスワードをいれてね！？")
            if (pswd=="koke") {
                        a=2
            }
}

let image2base64 = input_id => new Promise((resolve, reject) => {
            let fileinput = document.getElementById(input_id);
            if (fileinput == null)
                  reject("cant find element");

            let fileData = icon.files[0]
            if (fileData === undefined)
                  reject("no file")

            if (!fileData.type.match('image.*'))
                reject("file type error");

            let reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.readAsDataURL(fileData);
        })
        let func = async () => {
            let b64 = await image2base64('icon')
            console.log(b64)
            document.getElementById('info').textContent = '残念、まだ作成途中です';

            //document.getElementById("result").innerText = b64;
            //document.getElementById("result2").src = b64;
        };
