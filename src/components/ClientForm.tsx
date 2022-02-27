import { useForm, SubmitHandler } from "react-hook-form";


enum DepartmentEnum {
    BT = "BT",
    OT = "OT",
    ST = "ST",
    PT = "PT",
    SE = "SE",
    FO = "FO"
  }


enum InputGender {
    none = "Gender",
    Male = "Male",
    Female = "Female"
}

type Inputs = {
    name: string;

    birth: Date;
    email: string | number;
    age: number;
    phone: number;
    altPhone: number;
    fatherName: string;
    motherName: string;
    motherTongue: string;
    branch: string;
    address: string | number;
    gender: InputGender;
    discontinued: Date;
    time: number;
    department: DepartmentEnum;
    chief: string | number;
    diagnosis: string;
    remarks: number;
    getAge: any;
    BT: any;
    OT: any;
    ST: any;
}


const getAge = (dateString: any) => 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}



export const ClientFrom = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);




    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form_input">
                <div className="container">
                    <div className="input-flied">
                        <h2>Demographic IO<span className="text-filed">*</span></h2>
                    </div>
                    <div className="Demographic_input">
                        <span className="Demographic-left-side">
                            <div className="demographic-outer">
                                <div className="demographic-item">
                                    <label>Name:</label><br />
                                     <input type="text" placeholder="Enter Name" {...register("name", {required:true})} />
                                     {errors.name && <span>This field is required</span>}
                                     <br />
                                </div>
                                <div className="demographic-item">
                                    <label> Gender:</label><br />
                                    <select name="gender">
                                        <option value="none" selected>Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                </div>
                            </div>
                            <div className="demographic-outer">
                                <div className="demographic-item">
                                    <label className="date-picker">D.O.B:</label><br />
                                    <input type="date" {...register("birth")} />
                                     {errors.birth && <span>This field is required</span>}
                                    <br />
                                </div>
                                <div className="demographic-item">
                                    <label>Age (years):</label><br />
                                    <input type="number" className="age" readOnly  {...register} />
                                     {errors.age && <span>This field is required</span>}
                                    <br />
                                </div>
                            </div>

                        </span>
                    </div>
                    <div className="input-flied">
                        <h2>Address<span className="text-filed">*</span></h2>
                    </div>
                    <div className="addres_input">
                        <span className="left-side">
                            <div className="demographic-item" style={{marginBottom:"10px"}}>
                                <label >Phone:</label><br />
                                <input type="text" {...register("phone", {required:true})} />
                                {errors.phone && <span>This field is required</span>}
                                <br />
                            </div>
                            <div className="demographic-item" style={{marginBottom:"10px"}}>
                                <label >Email:</label><br />
                                <input type="email" {...register("email", {required:true})} />
                                {errors.email && <span>This field is required</span>}
                                <br />
                            </div>
                            <div className="demographic-item" style={{marginBottom:"10px"}}>
                                <label >Father Name:</label><br />
                                <input type="text" {...register("fatherName", {required:true})} />
                                {errors.fatherName && <span>This field is required</span>}
                               <br />
                            </div>
                        </span>
                        <span className="left-side">
                            <div className="demographic-item" style={{marginBottom:"10px"}}>
                                <label >Alternate Phone:</label><br />
                                <input type="text" {...register("altPhone", {required:true})} />
                                {errors.altPhone && <span>This field is required</span>}
                                <br />
                            </div>
                            <div className="demographic-item" style={{marginBottom:"10px"}}>
                                <label >Mother Tongue</label><br />
                                <input type="text" {...register("motherTongue", {required:true})} />
                                {errors.motherTongue && <span>This field is required</span>}
                                <br />
                            </div>
                            <div className="demographic-item" style={{marginBottom:"10px"}}>
                                <label >Mother Name</label><br />
                                <input type="text" {...register("motherName", {required:true})} />
                                {errors.motherName && <span>This field is required</span>}<br />
                            </div>
                        </span>

                    </div>
                    <div className="Address_flied">
                        <div className="demographic-item" style={{marginBottom:'10px'}}>
                            <label>Branch:</label><br />
                            <input type="text" {...register("branch", {required:true})} />
                            {errors.branch && <span>This field is required</span>}<br />
                        </div>
                        <div className="demographic-item" style={{marginBottom:'10px'}}>
                            <label>Address:</label><br />
                            <input type="text" {...register("address", {required:true})} />
                            {errors.address && <span>This field is required</span>}<br />
                        </div>
                    </div>
                    <h2>Created:</h2>
                </div>
                    <div className="input-flied">
                        <h2>Discontinued<span className="text-filed">*</span></h2>
                    </div>
                    <div className="created_input">
                        <span className="left-side1">
                            <span className="created-left-side">
                                <input type="radio" id="discontinious" name="discontinious" value="True" />
                                <input type="radio" {...register} />
                            </span>
                            <label  className="discontinued-item discontinued1">Discontinued</label>
                        </span>
                    </div>
                    <div className="discontinued">
                        <span className="left-side">
                            <label  className="discontinued-item" style={{marginBottom:"10px"}}>Discontinued
                                On:</label><br />
                                <input type="date" {...register("discontinued",{required:true})} />
                                {errors.discontinued && <span>This field is required</span>}
                        </span>
                    </div>
                    <div className="outer1" style={{display:'flex'}}>
                        <div className="outer" style={{width:'50%'}}>
                            <div className="input-flied1">
                                <h2>Assesments<span className="text-filed">*</span></h2>
                            </div>
                            <div className="created_input">
                                <div>
                                    <span className="created-left-side">
                                        
                                        <input type="radio" {...register("BT")} />
                                        <label className="toggle">BT</label> 
                                        {/* checked="checked" */}
                                    
                                        
                                        <input type="radio" {...register("OT")}/>
                                        <label className="toggle">OT</label>
                                        

                                        <input type="radio" {...register("ST")} />
                                        <label className="toggle">ST</label>
                                    </span>
                            
                                </div>
                        
            
                            </div>

                            <div className="outer" style={{width:"50%"}}>
                                <div className="input-flied1">
                                    <h2>Slot time<span className="text-filed">*</span></h2>
                                </div>
                                <div className="form-row m-b-55">

                                    <div>

                                        <label>Slot time from:</label>

                                        <input type="time" {...register("time")} />

                                    </div> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;

                                    <div><label>Slot time to:</label>

                                        <input type="time" {...register("time")} />

                                    </div>



                                </div>
                            </div>
                    </div>
                </div>
                
                <hr />
            </div>
            <div className="therapy-input">
                <div className="container">
                    <label> Therapy</label>
                    <select name="department">
                        <option  value="BT">BT</option>
                        <option  value="OT">OT</option>
                        <option  value="ST">ST</option>
                        <option  value="PT">PT</option>
                        <option value="SE">SE</option>
                    </select>

                </div>
                <div className="Chief_input">
                    <span className="Diagnerge-side">
                        <p>Chief Complete:</p>
                        <textarea cols={60} rows={30} {...register("chief", {required:true})} />
                        {errors.chief && <span>This field is required</span>}
                    </span>
                    <span className="Diagnerge-side">
                        <p>Diagnosis</p>
                        <textarea cols={60} rows={30} {...register("diagnosis", {required:true})} />
                        {errors.diagnosis && <span>This field is required</span>}
                    </span>
                    <span className="Diagnerge-side">
                        <p>Remarks:</p>
                        <textarea cols={60} rows={30} {...register("remarks", {required:true})} />
                        {errors.remarks && <span>This field is required</span>}
                    </span>
                    <div className="btn-outer">
                        <input type="submit"  className="btn login-form__btn submit w-100" />
                    </div>
                </div>
            </div>
        
        </form>

    );
}