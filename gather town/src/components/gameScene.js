import { io } from "socket.io-client";

class GameScene extends Phaser.Scene {
 
    
    constructor() {
        super({key:'gameScene'});
        this.background=null;
        this.player=null;
        this.playerId=null;
        this.otherPlayers=new Map();
        this.gameOverText=null;
        this.xCord=300;
        this.yCord=500;
        this.socket=null;
        this.gameOverTextStyle={font:'65px Arial',fill:'#ff0000',align:'center'}
        this.sitting=false;
        this.newImage=null;
        this.location=[
            {
                centerX:470,
                centerY:330,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:470,
                centerY:255,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:320,
                centerY:330,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:320,
                centerY:255,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:175,
                centerY:330,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:175,
                centerY:255,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:470,
                centerY:625,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:470,
                centerY:550,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:320,
                centerY:625,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:320,
                centerY:550,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:175,
                centerY:625,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:175,
                centerY:550,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:470,
                centerY:920,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:470,
                centerY:845,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:320,
                centerY:920,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:320,
                centerY:845,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:175,
                centerY:920,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:175,
                centerY:845,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1420,
                centerY:770,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1420,
                centerY:845,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1420,
                centerY:915,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1560,
                centerY:770,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1560,
                centerY:845,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1560,
                centerY:915,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1420,
                centerY:265,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1420,
                centerY:340,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1420,
                centerY:410,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1560,
                centerY:265,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1560,
                centerY:340,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1560,
                centerY:410,
                width:70,
                height:50,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1235,
                centerY:210,
                width:140,
                height:120,
                type:"piano",
                status:{isStatic:true}
            },
            {
                centerX:940,
                centerY:210,
                width:300,
                height:110,
                type:"book shelf",
                status:{isStatic:true}
            },
            {
                centerX:980,
                centerY:400,
                width:70,
                height:60,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:910,
                centerY:400,
                width:70,
                height:60,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:910,
                centerY:770,
                width:70,
                height:60,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:980,
                centerY:770,
                width:70,
                height:60,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1125,
                centerY:550,
                width:60,
                height:60,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:1125,
                centerY:625,
                width:60,
                height:60,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:765,
                centerY:550,
                width:60,
                height:60,
                type:"chair",
                status:{isStatic:true}
            },
            {
                centerX:765,
                centerY:625,
                width:60,
                height:60,
                type:"chair",
                status:{isStatic:true}
            },

            // left wall 
            {
                centerX:10,
                centerY:540,
                width:110,
                height:1080,
                type:"wall",
                status:{isStatic:true}
            },
            // top wall
            {
                centerX:960,
                centerY:10,
                width:1920,
                height:20,
                type:"wall",
                status:{isStatic:true}
            },
            // bottom wall
            {
                centerX:960,
                centerY:1070,
                width:1920,
                height:90,
                type:"wall",
                status:{isStatic:true}
            },

            // right top wall
            {
                centerX:1780,
                centerY:250,
                width:80,
                height:480,
                type:"wall",
                status:{isStatic:true}
            },

            // right bottom wall
            {
                centerX:1780,
                centerY:900,
                width:80,
                height:480,
                type:"wall",
                status:{isStatic:true}
            },
            {
                centerX:690,
                centerY:180,
                width:70,
                height:210,
                type:"wall clock",
                status:{isStatic:true}
            },
            {
                centerX:940,
                centerY:575,
                width:70,
                height:70,
                radius:90,
                type:"circular table",
                status:{isStatic:true}
            },
            {
                centerX:108,
                centerY:150,
                width:70,
                height:100,
                type:"speaker",
                status:{isStatic:true}
            },
            {
                centerX:1710,
                centerY:150,
                width:70,
                height:100,
                type:"speaker",
                status:{isStatic:true}
            },
            
            {
                centerX:910,
                centerY:85,
                width:1520,
                height:120,
                type:"wall",
                status:{isStatic:true}
            },
            
            
        ]
    }
    sendLocation(){
        console.log("called");
        this.socket.emit(
            "location",
                {
                    id: this.playerId,
                    locationX: this.player.x,
                    locationY: this.player.y,
                }
                
            
            )
    }
    init(data){
        this.cameras.main.setBackgroundColor('#ffffff');
    }
    
    preload(){
        console.log("this is game scene");
        this.load.image('officeBackground','src/assets/map1.png')
        this.load.image('player','src/assets/player.png')   
        this.load.image('playerSitting','src/assets/sitting_player.jpeg')
    }
    async getUserId(){
        console.log("calling join api")
        const req=await fetch("http://localhost:3000/joinspace");
        const data =await req.json();
        
        console.log("called api join")
        return data.id;
    }
    async create (data){
        this.background=this.add.image(0,0,'officeBackground').setScale(0.7);
        this.background.setOrigin(0,0);
        this.playerId=await this.getUserId();
        this.socket= new io("http://localhost:3000");

        
        this.player=this.matter.add.sprite(300, 500, 'player', null).setScale(0.2);
        this.socket.emit("join",
            {
                id: this.playerId,
                x: this.player.x,
                y: this.player.y,
             })
        this.socket.on("joinedPlayer",(data)=>{
            if(this.playerId!=data.id ){
                console.log("someone Joined")
                if(!this.otherPlayers.get(data.id)){
                    const newPlayer=this.matter.add.sprite(data.locationX, data.locationY, 'player', null).setScale(0.2);
                    this.otherPlayers.set(data.id,newPlayer);
                }
            }
            
        });
        
            this.socket.on("receiveLocation",(data)=>{
                if(this.playerId!=data.id ){
                    const playerSprite = this.otherPlayers.get(data.id);
                    console.log("someone Joined");
                    if (playerSprite) {
                        playerSprite.setPosition(data.locationX,data.locationY)
                        
                    }else{
                        const newPlayer=this.matter.add.sprite(data.locationX, data.locationY, 'player', null).setScale(0.2);
                        this.otherPlayers.set(data.id,newPlayer);
                    }
                    
                }
                
            });
            
        

        this.location.forEach((curr,idx)=>{
            if(curr.type=="circular table"){
                const ellipse = this.matter.add.circle(curr.centerX, curr.centerY, curr.radius, curr.status);
                console.log("Ellipse added:", ellipse);
            }else{
                this.matter.add.rectangle(curr.centerX,curr.centerY,curr.width,curr.height,curr.status);
            }
        })
        
        this.matter.world.disableGravity();
        this.player.setFixedRotation();
        this.input.keyboard.on('keydown-SPACE', this.sitOnChair, this);
        // this.background.setOrigin(0,0);
        
    }
    update(time,delta){
        const keyLeftObj=this.input.keyboard.addKey('LEFT');
        const keyRightObj=this.input.keyboard.addKey('RIGHT');
        const keyUpObj=this.input.keyboard.addKey('UP');
        const keyDownObj=this.input.keyboard.addKey('DOWN');
        if(this.player){
            if(keyDownObj.isDown){
                this.player.y=this.player.y+5;
                this.sitting=false;
                this.sendLocation();
            }
            if(keyUpObj.isDown){
                this.player.y=this.player.y-5;
                this.sitting=false;
                this.sendLocation()
            }
            if(keyLeftObj.isDown){
                this.player.x=this.player.x-5;
                this.sitting=false;
                this.sendLocation();
            }
            if(keyRightObj.isDown){
                this.player.x=this.player.x+5;
                this.sitting=false;
                this.sendLocation();
            }
        }

        
    }

    isPlayerNearChair() {
        this.proximityRadius = 50;
    
        return this.location.find((chair) => {
            if (chair.type === "chair" && this.player) {
                const dx = this.player.x - chair.centerX;
                const dy = this.player.y - chair.centerY;
                return Math.sqrt(dx * dx + dy * dy) <= this.proximityRadius;
            }
            return false;
        }) || null; 
    }
    sitOnChair() {
        const nearbyChair = this.isPlayerNearChair();
        if (nearbyChair!=null && this.sitting===false) {
            this.sitting = true;
            nearbyChair.status={isStatic:false};
            this.newImage = this.matter.add.sprite(
                nearbyChair.centerX,
                nearbyChair.centerY,
                'playerSitting' 
            ).setScale(0.2);
            this.xCord=this.player.x;
            this.yCord=this.player.y;
            this.player.destroy()
            this.player=null;
            console.log("Player is now sitting on a chair.");
        } else if(this.sitting===true){
           
            this.sitting = false;
           if(this.newImage) this.newImage.destroy();
            this.player=this.matter.add.sprite(this.xCord,
               this.yCord , 'player', null).setScale(0.2);
            console.log("Player stood up.",this.sitting);
        }
    }

}
export default GameScene;