
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  password: string | number,
};

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

//   console.log(watch("example")) // watch input value by passing the name of it

  return (

    <div className="login-area">
        <div className="container">
            <div className="login-box ptb--100">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login-form-head">
                    <h4>Sign In</h4>
                </div>
                <div className="login-form-body">
                    <div className="form-gp">
                        <input type="email" placeholder="Enter Your Email" {...register("email", {required:true})} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-gp">
                        <input type="password" placeholder="Enter Your Password" {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </div>
                </div>
                
                <div className="submit-btn-area">
                    <button style={{border:'2px solid blue', padding:'10px', borderRadius:'25px'}}
                        >Submit <i className="ti-arrow-right"></i></button>             
                        {/* <span className="text-danger" style={{fontSize:'large'}}></span> */}
                </div>
      
                {/* <input type="submit" /> */}
            </form>
            </div>
        </div>
    </div>
    
  );
}