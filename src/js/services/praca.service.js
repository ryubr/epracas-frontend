export default class Praca {
  constructor($http, $q, ErrorCatcher, AppConstants) {
    "ngInject"

    angular.extend(this, {
      $http,
      $q,
      ErrorCatcher,
      AppConstants,
      PracaEndPoint: `${AppConstants.api}/pracas/`,
    })
  }

  // Cria uma nova Praça e retorna a um JSON com os dados
  new(data) {
    const caller = this.ErrorCatcher.callerName()

    return this.$http({
      url: this.PracaEndPoint,
      method: "POST",
      data: data,
    })
      .then(res => res.data)
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }

  // Exclui uma Praça
  delete(pk) {
    const caller = this.ErrorCatcher.callerName()

    return this.$http({
      url: `${this.PracaEndPoint}${pk}/`,
      method: "DELETE",
    })
      .then(res => res.data)
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }

  // Recupera o registro de uma Praça
  get(pk) {
    const caller = this.ErrorCatcher.callerName()

    return this.$q((resolve, reject) => {
      if (!pk.replace(" ", "")) {
        reject("O id_pub está vazio!")
      } else {
        resolve()
      }
    })
      .then(() => this.$http({
        url: `${this.PracaEndPoint}${pk}/`,
        method: "GET",
      }))
      .then(res => res.data)
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }

  // Recupera as imagens de uma praca
  getImages(pk) {
    const caller = this.ErrorCatcher.callerName()

    return this.$q((resolve, reject) => {
      if (!pk.replace(" ", "")) {
        reject("O id_pub está vazio!")
      } else {
        resolve()
      }
    })
      .then(() => this.$http({
        url: `${this.PracaEndPoint}${pk}/imagens/`,
        method: "GET",
      }))
      .then(res => res.data)
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }

  // Recupera uma unica imagem da praca
  getImg(pkPraca, pkImg) {
    const caller = this.ErrorCatcher.callerName()

    return this.$q((resolve, reject) => {
      if (!pkPraca.replace(" ", "")) {
        reject("O id_pub está vazio!")
      } else {
        resolve()
      }
    })
      .then(() => this.$http({
        url: `${this.PracaEndPoint}${pkPraca}/imagens/${pkImg}/`,
        method: "GET",
      }))
      .then(res => res.data)
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }

  getAllRamoAtividade() {
    return [{ value: 1, display_name: "agropecuária" },
      { value: 2, display_name: "assistência social" },
      { value: 3, display_name: "comércio" },
      { value: 4, display_name: "comunicação" },
      { value: 5, display_name: "cultura" },
      { value: 6, display_name: "educação" },
      { value: 7, display_name: "esporte" },
      { value: 8, display_name: "indústria" },
      { value: 9, display_name: "organização comunitária" },
      { value: 10, display_name: "organização social" },
      { value: 11, display_name: "saúde" },
      { value: 12, display_name: "serviços" },
    ]
  }

  // Salva os dados da imagem de uma Praça.
  saveImg(praca, data) {
    const caller = this.ErrorCatcher.callerName()

    if (data.id_pub) {
      return this.$http({
        url: `${this.PracaEndPoint}${praca}/imagens/${data.id_pub}/`,
        method: "PATCH",
        data: data,
      })
        .then(res => res.data)
        .catch((err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        })
    }

    return this.$http({
      url: `${this.PracaEndPoint}${praca}/imagens/`,
      method: "POST",
      data: data,
    })
      .then(res => res.data)
      .catch((err) => {
        this.ErrorCatcher.error(caller, err)
        return this.$q.reject()
      })
  }

  // Recupera as imagens de uma praca
  deleteImg(pkPraca, pkImg) {
    const caller = this.ErrorCatcher.callerName()

    return this.$q((resolve, reject) => {
      if (!pkPraca.replace(" ", "")) {
        reject("O id_pub está vazio!")
      } else {
        resolve()
      }
    })
      .then(() => this.$http({
        url: `${this.PracaEndPoint}${pkPraca}/imagens/${pkImg}/`,
        method: "DELETE",
      }))
      .then(res => res.data)
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }

  // Lista todas as Praças
  list() {
    const caller = this.ErrorCatcher.callerName()

    return this.$http({
      url: this.PracaEndPoint,
      method: "GET",
    })
      .then(res => res.data)
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }

  // Procura por uma Praça utilizando o parametro query
  search(query) {
    const caller = this.ErrorCatcher.callerName()

    return this.$http({
      url: this.PracaEndPoint,
      method: "GET",
      params: { search: query },
    })
      .then(res => res.data)
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }

  // Salva os dados de uma Praça
  save(praca, data) {
    const caller = this.ErrorCatcher.callerName()

    return this.$http({
      url: `${this.PracaEndPoint}${praca}/`,
      method: "PATCH",
      data: data,
    })
      .then(res => res.data)
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }

  // Retorna as opções disponiveis para alguns campos
  options(praca) {
    const caller = this.ErrorCatcher.callerName()

    if (praca) {
      return this.$http({
        url: `${this.PracaEndPoint}${praca.id_pub}/`,
        method: "OPTIONS",
      })
        .then(response => response.data)
        .then(data => {
          if(data.actions.PUT) {
            return data.actions.PUT
          } else {
            return data.selections
          }
        })
        .catch(
          (err) => {
            this.ErrorCatcher.error(caller, err)
            return this.$q.reject()
          }
        )
    }
    return this.$http({
      url: this.PracaEndPoint,
      method: "OPTIONS",
    })
      .then(response => response.data)
      .then(data => {
        if(data.actions) {
          return data.actions.POST
        } else {
          return data.selections
        }
      })
      .catch(
        (err) => {
          this.ErrorCatcher.error(caller, err)
          return this.$q.reject()
        }
      )
  }
}
