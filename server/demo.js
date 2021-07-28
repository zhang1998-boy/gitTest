var ruleForm = {
    type: '1',
    name: '2',
    credit_code: '3',
    tax_authority: '4',
    legal_name: '5',
    legal_code: '6',
    address: '7',
    business_name: '8',
    business_phone: '9',
    business_code: '11',
    business_accound: '12',
    bill_company: '14',
    account: '13',
    password: 133
}
let a = {  }

let info = Object.assign({
    service: 'Common.User.User.tenantConsignerCreate',
    permission_value: 'consigner',
    type: 2,
}, ruleForm)

console.log(info)

var obj ={}
function test2(){
    this.name = 'hahahah'
}
test2.call(obj)
console.log(obj.name)


var aadsas ='1' ;

if(aadsas ===1&&3 ){
    console.log(aadsas,1111111199)
}
