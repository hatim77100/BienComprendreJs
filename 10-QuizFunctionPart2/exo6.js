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
  present: present
};
 
present();
kev.present.call(kev);
franck.present.call(this);