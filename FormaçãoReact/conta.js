export class Conta{
  
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
  
    get saldo(){
        return this.saldo;
    }

// Lembre-se que precisamos sempre declarar as propriedades da classe  dentro de um método da classe.
// O modo mais comum de declaras as propriedades da classe dentro de um método é fazer isso dentro do construtor.

    constructor(tipo, saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo = tipo;
    }

    sacar(valor) {

        let = taxa = 1;
        if(this._tipo =="corrente"){
            taxa = 1.1;
        }
        const valorSacado = taxa*valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}