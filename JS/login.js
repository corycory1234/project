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
