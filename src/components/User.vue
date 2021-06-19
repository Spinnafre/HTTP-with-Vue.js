
<template>
  <div class="container-users">
    <ul v-for="(user, i) in users" :key="i">
      <li v-text="user.name"></li>
      <li>{{ user.age }} anos</li>
    </ul>
    <form action="">
      <input type="text" v-model="name" placeholder="Digite o nome" />
      <input type="text" v-model="cpf" placeholder="Digite o cpf" />
      <input type="text" v-model="age" placeholder="Digite a idade" />
      <input type="text" v-model="sex" placeholder="Digite o sexo" />
      <br />
      <br />
      <button @click.prevent="createUser">Cadastrar usuário</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      users: [],
      name: "",
      cpf: "",
      age: 0,
      sex: "",
    };
  },
  methods: {
    createUser() {
      this.$http
        .post("user", {
          name: this.name,
          cpf: this.cpf,
          age: this.age,
          sex: this.sex,
        })
        .then(()=> this.loadUsers());
    },
    loadUsers() {
      this.$http.get("users").then((users) => {
        console.log(users.data)
        return (this.users = users.data);
      });
    },
  },
  created() {
      this.loadUsers()
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
}
ul li::before {
  content: "--> ";
}
</style>