let signupEmail = document.getElementById('signup_email')
let signupPass = document.getElementById('signup_password')
let signupBtn = document.getElementById('signup_btn')
let signup_btn_spinner = document.getElementById("signup_btn_spinner")

let loginBtn = document.getElementById('login_btn')
let loginEmail = document.getElementById('login_email')
let loginPass = document.getElementById('login_password')
let login_btn_spinner = document.getElementById('login_btn_spinner')



let sessionBtn = document.getElementById('session_btn')

let logoutBtn = document.getElementById('logout_btn')


async function signup() {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: signupEmail.value,
            password:  signupPass.value,
          })
          
        if (error) throw error

        if (data) {
            console.log(data)
            Swal.fire({
                title: "Please Check your email for confirmation",
                icon: "success"
            });
            
            setTimeout(()=>{
                    window.location.href = `login.html`
            },2000)
        }   
           
        return data;
    }

    catch(error){
        console.log(error)
        Swal.fire({
            title: error.message,
            icon: "error"
        });
    }
}


async function login() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPass.value,
          })

          if(error) throw error
          if(data) {
            console.log(data)
            Swal.fire({
                title: "Sign in Succesfull",
                icon: "success"

                
            });
          
        }   
        
          return data;
        }

    
    

     catch (error) {
            console.log(error)

            Swal.fire({
                title: error.message,
                icon: "error"
            });
    }
   
}

if(signupBtn){
signupBtn.addEventListener('click', signup)
}



if(loginBtn){
    loginBtn.addEventListener('click',login)
}

