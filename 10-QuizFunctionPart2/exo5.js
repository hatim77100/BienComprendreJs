var name = "John";
 
function present() {
  console.log(this.name);
}
 
const kev = {
  name: "Kevin",
  present: present
};
 
const franck = {
  name: "Franck",
  present: present.bind(this)
};
 
const presentKev = kev.present.bind(this);
 
present();
kev.present();
presentKev();
franck.present();