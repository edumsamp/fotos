import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuVisivel = true;
  dados = {titulo: '', conteudo:''};
  lista = []

  constructor(){
    let dadosString = localStorage.getItem('cards');

    if(dadosString){
      this.lista = JSON.parse(dadosString);
    }
  }

  alternarMenu(){
    if(this.menuVisivel){
      this.menuVisivel = false
    }else{
      this.menuVisivel = true
    }
  }

  inserir(){
    this.lista.push(this.dados);
    this.dados = {titulo:'', conteudo:''};
    console.log(this.lista);
    let dadosString = JSON.stringify(this.lista);
    localStorage.setItem('cards', dadosString);
  }

  limpar(){
    this.lista = [];
    localStorage.clear();
  }



}
