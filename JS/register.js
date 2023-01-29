// -------------------- 會員註冊、會原登入 ----------------------- //
//  https://hex-escape-room.herokuapp.com/api/user/signup
    // ---------------------------註冊功能------------------------------
    let account = document.querySelector(".account");
    let password = document.querySelector(".password");
    let send = document.querySelector(".send");
    let acctWarning = document.querySelector(".acctWarning")


// ----------------------  禁止輸入空白字串 -------------------- /
    // $('.account').on("input", function(){
    //     let noSpace = $(this).val();
    //     noSpace = noSpace.replace(/^(\r\n|\n|\r|\t| )+/gm, "");
    //     $('.account').val(noSpace);
    //   });

    
    // $('.password').on("input", function(){
    //     let noSpace= $(this).val();
    //     noSpace=noSpace.replace(/^(\r\n|\n|\r|\t| )+/gm, "");
    //     $('.password').val(noSpace);
    // });

    $('.signInAcct').on("input", function(){
        let noSpace = $(this).val();
        noSpace = noSpace.replace(/^(\r\n|\n|\r|\t| )+/gm, "");
        $('.signInAcct').val(noSpace);
      });


      $('.signInPassword').on("input", function(){
        let noSpace = $(this).val();
        noSpace = noSpace.replace(/^(\r\n|\n|\r|\t| )+/gm, "");
        $('.signInPassword').val(noSpace);
      });






    // 監聽 帳號密碼、axios.post
    send.addEventListener("click", function(event){
        callSignUp();
        
    })


    function callSignUp (){
        // email: "a8plusa8plus@gmail.com"
        // password: "12345678"
        if(account.value == "" || password.value == ""){
            alert("帳號密碼不可為空白!");
            return; // 沒輸入帳密, 就按註冊, 立碼中斷函式
        }


        let obj = {};   // 空物件, 因為User還沒輸入資料
        obj.email = account.value // 賦予 使用者輸入eamil的帳號
        obj.password = password.value // 
        console.log(obj);

        axios.post("https://hex-escape-room.herokuapp.com/api/user/signup", obj)
        
            .then(function (response){
                if(response.data.message == "帳號註冊成功"){    // 客製化 帳號註冊ok之訊息
                    alert("註冊完畢!"); // 客製化 帳號註冊ok之訊息
                }else{
                    acctWarning.innerHTML = "註冊失敗, 請檢查帳號密碼是否正確!"
                }
                account.value = ""; // 帳秘輸入完, input便空白
                password.value = ""; // 帳秘輸入完, input便空白
            })

            
            .catch(function (error){
                console.log(error);
            })

    }




    // ------------登入功能-----------------//

    let signInAcct = document.querySelector(".signInAcct");
    let signInPassword = document.querySelector(".signInPassword");
    let send2 = document.querySelector(".send2");


    send2.addEventListener("click", function(event){
        callSignIn();
    });

    function callSignIn(){
        if(signInAcct == "" || signInPassword == ""){
            alert("帳號或密碼不可空白");
            return;
        }

        let obj2 ={};
        obj2.email = signInAcct.value; 
        obj2.password = signInPassword.value;

        axios.post("https://hex-escape-room.herokuapp.com/api/user/signin", obj2)
            .then(function(response){
                if(response.data.message == "登入成功"){
                    console.log(response)
                    alert("帳號成功登入~~~")
                }else{
                    alert("登入失敗, 請再次確認帳號密碼~~~");
                }
                signInAcct.value = "";
                signInPassword.value = "";
            })
            .catch(function(error){
                console.log(error);
            })
    }
