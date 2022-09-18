function present() {
    return this.name;
  }
   
  const me = {
    name: "John",
    age: 32,
    present: present
  }
   
  console.log(me.present());