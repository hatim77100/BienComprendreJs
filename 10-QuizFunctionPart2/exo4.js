var name = "John";
 
function present() {
  console.log(this.name);
}
 
const kev = {
  name: "Kevin",
  present: present
};
 
const presentKev = kev.present;
const presentKevBind = kev.present.bind(kev);
 
present();
kev.present();
presentKev();
presentKevBind();