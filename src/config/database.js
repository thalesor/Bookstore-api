import { loadEnv } from './envs';
import { MongoClient } from "mongodb";

loadEnv();

export const database = {
    client : new MongoClient(process.env.MONGO_URI),
    connect : async function()
    {
        await this.client.connect();
        const db = this.client.db("bookstore");
        return db;
    },
    insert : async function(collection, insertData)
    {
        try
        {
            const db = await this.connect();
            const returnedData = await db.collection(collection)
            .insertOne(insertData);
            if(returnedData.acknowledged)
            {
                
                return true;
            }
            
            return false;
        }
        catch(err){
            console.log(err);
            
            return false;
        }
    },
    insertMany : async function(collection, arrayData)
    {
        try
        {
            const db = await this.connect();
            const returnedData = await db.collection(collection)
            .insertMany(arrayData);
            if(returnedData.acknowledged)
            {
                
                return true;
            }
            
            return false;
        }
        catch(err){
            console.log(err);
            
            return false;
        }
    },
    deleteMany : async function(collection, arrayData)
    {
        try
        {
            const db = await this.connect();
            const returnedData = await db.collection(collection)
            .deleteMany(arrayData);
            if(returnedData.acknowledged)
            return true;
            
            
            return false;
        }
        catch(err){
            console.log(err);
            
            return false;
        }
    },
    update: async function(collection, origin, newData)
    {
        try
        {
            const toUpdate = await this.find(collection, origin);
            if(toUpdate.length)
            {
                let db = await this.connect();
                const returnedData = await db.collection(collection)
                .updateOne(origin,
                { $set: newData });
                if(returnedData.acknowledged)
                return true;
                
                return false;
            }
        }
        catch(err){
            console.log(err);
            
            return false;
        } 
    },
    find : async function(collection, filters)
    {
        try
        {
            const db = await this.connect();
            const returnedData = db.collection(collection)
            .find(filters);
            return returnedData.toArray();
        }
        catch(err){
            console.log(err);
            
            return false;
        }
    }
}

export async function seeding()
{
         await database.insertMany("books", [
        {
            title: 'O Exorcista',
            category: 'Terror',
            imageUrl: 'https://images-submarino.b2w.io/produtos/134170806/imagens/livro-o-exorcista/134170806_1_large.jpg',
            description: `Um cl??ssico do terror com mais de 13 milh??es de exemplares vendidos ???Imposs??vel parar
             de ler. Poe e Mary Shelley reconheceriam [William Peter Blatty] como mais um companheiro do limbo
              amb??guo entre o natural e o sobrenatural... De arrepiar.??? ??? Life Uma obra que mudou a cultura
               pop para sempre, O exorcista ?? o livro que deu origem ao maior filme de terror do s??culo XX.
                Quatro d??cadas ap??s chocar o mundo inteiro, a obra-prima de William Peter Blatty permanece 
                uma met??fora moderna do combate entre o sagrado e o profano, em um dos romances mais macabros 
                j?? escritos.. O mal assume v??rias formas. Seja com monstros, fantasmas ou dem??nios, 
                tanto a literatura quanto o cinema sempre foram bem-sucedidos em representar a ess??ncia do nosso lado mais reprov??vel.
            `,
            price: 28.71,
            in_stock: 80,
            views: 0
        },
        {
            title: 'It: A coisa',
            category: 'Terror',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg',
            description: `Nesse cl??ssico que inspirou os filmes da Warner, um grupo de amigos conhecido como Clube dos Ot??rios aprende o real sentido da amizade, do amor, da confian??a... e do medo. O mais profundo e tenebroso medo.
            Durante as f??rias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos come??a a ver coisas estranhas. Um conta que viu um palha??o, outro que viu uma m??mia. Finalmente, acabam descobrindo que estavam todos
             vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir v??rias formas. ?? assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.
            Quase trinta anos depois, o grupo volta a se encontrar. Mike, o ??nico que permaneceu em Derry, d?? o sinal ??? uma nova onda de terror tomou a pequena cidade.
             ?? preciso unir for??as novamente. S?? eles t??m a chave do enigma. S?? eles sabem o que se esconde nas entranhas de Derry. S?? eles podem vencer a Coisa.
            ???Mesmo depois de tantos anos, o p??blico continua obcecado por IT. Ficamos obcecados porque todos temos medos. Todos temos algo que nos assusta, sejam palha??os e aranhas ou coisas que se escondem em um lugar muito mais profundo de nossa mente.
             Este livro fala com todo mundo. ?? o romance mais assustador de King, e duvido que isso v?? mudar??? ??? The Guardian.
            `,
            price: 53.80,
            in_stock: 120,
            views: 0
        },
        {
            title: 'O Chamado de Cthulhu',
            category: 'Terror',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51ifevEGEbL._SX320_BO1,204,203,200_.jpg',
            description: `O conto que d?? nome ?? colet??nea ?? um dos grandes cl??ssicos do horror do s??culo XX.
             O livro re??ne ainda outros seis textos, escritos ao longo da vida do autor, desde sua estreia liter??ria com Dagon at?? pouco antes de sua morte.
             Cont??m o in??dito A m??sica de Erich Zann, considerado pelo pr??prio Lovecraft um de seus melhores escritos.
              No ap??ndice, o leitor encontrar?? ainda uma carta do escritor ao amigo R.Michael, em que fala sobre sua personalidade e sua vida, e um artigo em que discute o m??todo que empregava na cria????o de seus contos.
            `,
            price: 36.00,
            in_stock: 37,
            views: 0
        },
        {
            title: 'O c??o dos Baskervilles',
            category: 'Mist??rio',
            imageUrl: 'https://images-submarino.b2w.io/produtos/01/00/item/7406/1/7406139GG.jpg',
            description: `O milion??rio ingl??s Sir Charles Baskerville ?? encontrado morto no p??ntano e um ataque card??aco ?? a causa prov??vel, mas h?? quem acredite que um c??o-fantasma assombra a regi??o,
             matando h?? gera????es homens da fam??lia Baskerville. Sherlock Holmes e seu ajudante Watson s??o convocados para resolver o mist??rio. Escrito em 1902 por Sir Arthur Conan Doyle,
              o mais conhecido romance com o lend??rio detetive j?? inspirou cerca de vinte adapta????es para o cinema.
            `,
            price: 20.18,
            in_stock: 22,
            views: 0
        },
        {
            title: 'O Assassinato De Roger Ackroyd',
            category: 'Mist??rio',
            imageUrl: 'https://images-submarino.b2w.io/produtos/119960236/imagens/livro-o-assassinato-de-roger-ackroyd/119960236_1_large.jpg',
            description: `Em uma noite de setembro, o milion??rio Roger Ackroyd ?? encontrado morto, esfaqueado com uma adaga tunisiana ??? objeto raro de sua cole????o particular ??? no quarto da mans??o Fernly Park na pacata vila de King???s Abbott.
            A morte do fidalgo industrial ?? a terceira de uma misteriosa sequ??ncia de crimes, iniciada com a de Ashley Ferrars, que pode ter sido causada ou por uma ingest??o acidental de son??feros ou envenenamento articulado por sua esposa ??? esta, ali??s, completa a sequ??ncia de mortes, num prov??vel suic??dio.
            Os tr??s crimes em s??rie chamam a aten????o da velha Caroline Sheppard, irm?? do dr. Sheppard, m??dico da cidade e narrador da hist??ria. Suspeitando de que haja uma rela????o entre as mortes, dada a proximidade de miss Ferrars com o tamb??m vi??vo Roger Ackroyd, Caroline pede a ajuda do ent??o aposentado detetive belga Hercule Poirot,
            que passava suas merecidas f??rias na vila.
            Amea??as, chantagens, v??cios, heran??as, obsess??es amorosas e uma carta reveladora deixada por miss Ferrars comp??em o cen??rio desta surpreendente trama, cujo transcorrer elenca novos suspeitos a todo instante, exigindo a habitual perspic??cia do detetive Poirot em seu retorno ao mundo das investiga????es.
            O assassinato de Roger Ackroyd ?? um dos mais famosos romances policiais da rainha do crime.
            `,
            price: 39.91,
            in_stock: 76,
            views: 0
        },
        {
            title: 'A Garota Do Lago',
            category: 'Mist??rio',
            imageUrl: 'https://images-submarino.b2w.io/produtos/130884182/imagens/livro-a-garota-do-lago/130884182_1_large.jpg',
            description: `Summit Lake, uma pequena cidade entre montanhas, ?? esse tipo de lugar, buc??lico e com encantadoras casas dispostas ?? beira de um longo trecho de ??gua intocada.
            Duas semanas atr??s, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas.
             Filha de um poderoso advogado, Becca estava no auge de sua vida. Atra??da instintivamente pela not??cia, a rep??rter Kelsey Castle vai at?? a cidade para investigar o caso.
            ...E LOGO SE ESTABELECE UMA CONEX??O ??NTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava,
             a rep??rter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu pr??prio passado.
            `,
            price: 8.60,
            in_stock: 35,
            views: 0
        },
        {
            title: 'Confeitaria Escalafobetica: Sobremesas Explicadas Tim-Tim Por Tim-Tim',
            category: 'Culin??ria',
            imageUrl: 'https://images-submarino.b2w.io/produtos/50123742/imagens/confeitaria-escalafobetica-sobremesas-explicadas-tim-tim-por-tim-tim/50123742_1_large.jpg',
            description: `Apaixonada pela confeitaria e suas t??cnicas verdadeiras, obcecada pelas m??dias e, acima de tudo, glutona, Raiza Costa criou o Dulce Delight em 2010,
            o primeiro canal on-line dedicado ?? confeitaria, antes mesmo de ser formada pelo French Culinary Institute de Nova York. Sua dire????o de arte, irrever??ncia e humor renderam milhares de visualiza????es para o canal,
            que se tornou refer??ncia e se estendeu para um programa di??rio no gnt, o Rainha da Cocada. Com um p?? no vintage e outro na inova????o, e sempre com seu c??ozinho Lancelote por perto, Raiza mistura tecnologia e funcionalidade com elementos decorativos
            que muitas vezes lembram a casa aconchegante de uma av?? querida, mas sem perder a sua espontaneidade nem os c??digos contempor??neos. Neste livro, voc?? encontra receitas exclusivas e tamb??m as de maior sucesso da chef, sempre acompanhadas de importantes dicas que fazem a diferen??a.
            Nele, s??o ensinadas t??cnicas de confeitaria avan??adas para seu s??quito de f??s (e tamb??m para os f??s da confeitaria), de um jeito simples e divertido! Lan??amento do Senac S??o Paulo, Confeitaria escalafob??tica: sobremesas explicadas tim-tim por tim-tim ?? uma deliciosidade em todos os sentidos.
            Das receitas, que refletem um grande respeito pelas t??cnicas tradicionais francesas, ao projeto gr??fico primoroso, com fotos criativas que ilustram todas as sobremesas e doces, tudo foi pensado para retratar, o mais fielmente poss??vel, n??o s?? a trajet??ria de uma profissional, mas tamb??m a ess??ncia de uma personalidade intensa e descontra??da.
            `,
            price: 70.89,
            in_stock: 18,
            views: 0
        },
        {
            title: 'Direto ao p??o: receitas caseiras para todas as horas',
            category: 'Culin??ria',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51TGmas3THL._SX372_BO1,204,203,200_.jpg',
            description: `Que p??o voc?? quer para o seu caf?? da manh??? P??o franc??s? Baguete? Um p??o r??stico, bem cascudo, ou um p??ozinho de leite ultramacio? Todas essas receitas est??o neste novo livro de Luiz Am??rico Camargo, com produ????o de Rita Lobo e sua equipe. E ainda tem broa portuguesa, p??o s??rio, p??o de hamb??rguer e de cachorro-quente, focaccia, ciabatta, chocotone... S??o cerca de 30 tipos diferentes de p??o (quase todos com fermento biol??gico), al??m de sugest??es de recheios, acompanhamentos e reaproveitamentos, num total de 40 receitas. 'Direto ao P??o' ?? um guia completo para quem quer se iniciar na panifica????o caseira. Da escolha dos ingredientes ao resfriamento p??s-forno, voc?? vai aprender em detalhes todas as etapas para assar o fil??o perfeito. Luiz Am??rico Camargo, autor de sucesso com P??o Nosso (tamb??m publicado pela parceria Panelinha-Senac), ensina estrat??gias para controlar o tempo e n??o ficar preso na hora do preparo. Com planejamento, voc?? dribla a correria e encaixa o p??o ??? e aquele perfume que sai do forno! ??? na sua rotina. E para voc?? ler entre uma sova e outra, o livro ainda traz as cr??nicas do padeiro, numa prosa deliciosa como as fornadas.
            `,
            price: 101.25,
            in_stock: 2,
            views: 0
        },
    ]);

    await database.insertMany("categories", [
        { name: "Terror"},
        {  name: "Mist??rio"},
        { name: "Culin??ria" }
    ]);
}
