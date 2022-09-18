var name = "Global";
 
const present1 = function() {
  console.log(this.name);
}
const present2 = () => console.log(this.name);
 
const present3 = present1.bind(this);
 
const me = {
  name: "John",
  present1: present1,
  present2: present2,
  present3: present3
};
 
me.present1();
me.present2();
me.present3();