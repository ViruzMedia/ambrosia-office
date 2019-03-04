<template>
  <div class="login_registration">
    <div class="sufee-login d-flex align-content-center flex-wrap">
      <div class="container">
        <div class="login-content">
          <div class="login-logo">
            <a href="">
              <img class="align-content" src="static/assets/images/ambrosialogo.png" alt>
            </a>
          </div>
          <div class="login-form">
            <h6>Account-System > Registration</h6>
            <hr>
            <ul class="nav">
              <li class="active btn-sm">
                <a data-toggle="pill" href="#menu0">Allgemeines</a>
              </li>
              <li class="btn-sm">
                <a data-toggle="pill" href="#menu1">Adressdaten</a>
              </li>
              <li class="btn-sm">
                <a data-toggle="pill" href="#menu2">Kontaktdaten</a>
              </li>
              <li class="btn-sm">
                <a data-toggle="pill" href="#menu3">Social-Network</a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="menu0" class="tab-pane fade in active">
                <br>
                <div class="form-group">
                  <label>* Account-Name</label>
                  <input
                    v-model="username"
                    required
                    class="form-control"
                    placeholder="Account-Name"
                  >
                </div>
                <div class="form-group">
                  <label>* Vorname</label>
                  <input v-model="firstname" required class="form-control" placeholder="Vorname">
                </div>
                <div class="form-group">
                  <label>* Nachname</label>
                  <input v-model="lastname" required class="form-control" placeholder="Nachname">
                </div>
                <div class="form-group">
                  <label>* Geburtsdatum</label>
                  <input
                    v-model="birthday"
                    type="date"
                    required
                    class="form-control"
                    placeholder="TT/MM/JJJJ"
                  >
                </div>
                <div class="form-group">
                  <label>* Passwort</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Passwort"
                    v-model="password"
                    required
                  >
                </div>
              </div>
              <div id="menu1" class="tab-pane fade">
                <br>
                <div class="form-group">
                  <label>* Straße</label>
                  <input v-model="street" required class="form-control" placeholder="Straße">
                </div>
                <div class="form-group">
                  <label>* Hausnummer</label>
                  <input
                    type="number"
                    v-model="number"
                    required
                    class="form-control"
                    placeholder="Hausnummer"
                  >
                </div>
                <div class="form-group">
                  <label>* Stadt</label>
                  <input v-model="city" required class="form-control" placeholder="Stadt">
                </div>
                <div class="form-group">
                  <label>* Postleihzahl</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Postleihzahl"
                    v-model="plz"
                    required
                  >
                </div>
              </div>
              <div id="menu2" class="tab-pane fade">
                <br>
                <div class="form-group">
                  <label>* E-Mail Adresse</label>
                  <input
                    type="email"
                    v-model="email"
                    required
                    class="form-control"
                    placeholder="E-Mail Adresse"
                  >
                </div>
                <div class="form-group">
                  <label>* Telefon-Mobil</label>
                  <input
                    type="tel"
                    v-model="tel_mobil"
                    required
                    class="form-control"
                    placeholder="Private-Telefonnummer"
                  >
                </div>
                <div class="form-group">
                  <label>Telefon-Festnetz</label>
                  <input
                    type="tel"
                    v-model="tel_home"
                    class="form-control"
                    placeholder="Festnetz-Telefonnummer"
                  >
                </div>
                <div class="form-group">
                  <label>Telefon-Geschäftlich</label>
                  <input
                    type="tel"
                    v-model="tel_work"
                    class="form-control"
                    placeholder="Geschäftliche Telefonnummer"
                  >
                </div>
              </div>
              <div id="menu3" class="tab-pane fade">
                <br>
                <div class="form-group">
                  <label>Instagram</label>
                  <input v-model="instagram" class="form-control" placeholder="Instagram-Name">
                </div>
                <div class="form-group">
                  <label>Twitter</label>
                  <input v-model="twitter" class="form-control" placeholder="Twitter-Name">
                </div>
                <div class="form-group">
                  <label>Facebook</label>
                  <input v-model="facebook" class="form-control" placeholder="Facebook-Name">
                </div>
                <div class="form-group">
                  <label>Snapchat</label>
                  <input class="form-control" placeholder="Snapchat-Name" v-model="snapchat">
                </div>
              </div>
            </div>
            <br>
            <div @click="register" class="btn btn-success btn-sm">Registrieren</div>
            <hr>
            <div class="register-link m-t-15 text-center">
              <p>
                <small>Der erstellte Account ist für das komplette Ambrosia-Netzwerk gültig.</small>
                <br>
                <small>
                  Alle mit
                  <b>*</b> gekennzeichneten Felder sind Pflichteingabefelder!
                </small>
              </p>
              <p>Du bist schon Ambrosia-Mitglied?
                <router-link :to="'login'">Jetzt einloggen!</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/authentication.service";
export default {
  data() {
    return {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      birthday: "",
      street: "",
      number: "",
      city: "",
      plz: "",
      email: "",
      tel_mobil: "",
      tel_home: "",
      tel_work: "",
      instagram: "",
      facebook: "",
      twitter: "",
      snapchat: "",
      message: "",
      spec: "",
      alert: false
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        birthday: this.birthday,
        street: this.street,
        number: this.number,
        city: this.city,
        plz: this.plz,
        email: this.email,
        tel_mobil: this.tel_mobil,
        tel_home: this.tel_home,
        tel_work: this.tel_work,
        instagram: this.instagram,
        facebook: this.facebook,
        twitter: this.twitter,
        snapchat: this.snapchat
      });
      console.log(response.data);
      this.updateMessage(response);
      if (this.alert === true) {
        this.$noty.error(this.message);
      }
    },
    async updateMessage(response) {
      this.message = response.data.message;
      this.spec = response.data.spec;
      this.alert = response.data.error;
      await this.$nextTick();
    },
    async clear() {
      await this.$refs.form.reset();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
