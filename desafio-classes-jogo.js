class heroi{
	constructor (nome, idade, tipo){
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
            
   }
   
   atacar() {
   		let ataque = " " ;
        
        switch (this.tipo) {
        	case 'mago':
            	ataque = 'magia';
                break;
           	case 'guerreiro':
            	ataque = 'espada';
            	break;
            case 'monge':
            	ataque = 'artes marciais';
                break;
            case 'ninja':
            	ataque = 'shuriken';
                break;
            default:
            	ataque = 'ataque desconhecido ou proibido';
      }
      
          
      console.log (`O ${this.tipo} atacou usando ${ataque}`);
      
      }
      }
      
      //APLICAÇÕES
      
      const heroi1 = new heroi('Herói Mago', 25, 'mago');
		heroi1.atacar();
        
      const heroi2 = new heroi('Herói Guerreiro', 25, 'guerreiro');
		heroi2.atacar();
        
      const heroi3 = new heroi ('Herói Monge', 30, 'monge');
      	heroi3.atacar();	
        
      const heroi4 = new heroi ('Herói ninja', 27, 'ninja');
      	heroi4.atacar ();     	
     
