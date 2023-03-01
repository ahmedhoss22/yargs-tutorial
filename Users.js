const fs=require('fs')
class Users{
    constructor(id,lname,fname,age,city){
        this.id=id
        this.lname=lname
        this.fname=fname
        this.city=city
        this.age=age
    }
    save(){
        let data=Users.getAll()
        let filter= data.filter((ele)=>ele.id == this.id)
        if(filter.length!=0) return console.log("Data repeated");
        data.push({
            id:this.id,
            fname:this.fname,
            lname:this.lname,
            age:this.age,
            city:this.city
        })
        fs.writeFileSync('data.json',JSON.stringify(data))
    }
    static getAll(){
        try {
            let data=JSON.parse(fs.readFileSync('data.json').toString())
            return data  
        } catch (error) {
            console.log(error.message);
            return []
        }
    }
    static delete(id){
        let data =Users.getAll()
        data= data.filter((ele)=>ele.id !=id)
        fs.writeFileSync('data.json',JSON.stringify(data))
    }
    static list(){
        let data =Users.getAll()
        data= data.map((ele)=>{
            return console.log(ele.fname,ele.lname)
        })
    }

}
module.exports=Users;