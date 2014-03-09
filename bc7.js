// Build Craft 0.8.1

// Made by Crazy4Redstone

// Variables:

var Start = 0
var StartId = 450
var Mined = 0

// Items:

// Wrench
function ModPE.setItem (450,'name_tag',0,'Wrench')

// Blocks:

// Mining Well
Block.defineBlock (174,'Mining Well',[['furnace',3],['stonecutter',2],['furnace',2],['furnace',2],['furnace',2],['furnace',2]],50,false,0)
Block.setShape (174,0,0,0,1,1,1)
Block.setDestroyTime (174,0.25)

// Auto Crafting Table
Block.defineBlock (175,'Automatic Crafting Table',[['planks',0],['stonecutter',2],['crafting_table',1],['crafting_table',1],['crafting_table',1],['crafting_table',1]],50,false,0)
Block.setShape (175,0,0,0,1,1,1)
Block.setDestroyTime (175,0.25)

// Builder
Block.defineBlock (176,'Builder',[['stonecutter',3],['stonecutter',3],['stonecutter',0],['stonecutter',0],['stonecutter',0],['stonecutter',0]],50,false,0)
Block.setShape (176,0,0,0,1,1,1)
Block.setDestroyTime (176,0.25)

// Oil - Still
Block.defineBlock (177,'Oil',[['dragon_egg',0]],50,false,0)
Block.setShape (177,0,0,0,1,1,1)
Block.setDestroyTime (177,0.25)

// Wood Pipe
Block.defineBlock (178,'Wood Pipe',[['planks',0]],50,true,11)
Block.setDestroyTime (178,0.25)

// Cobblestone Pipe
Block.defineBlock (179,'Cobblestone Pipe',[['cobblestone',0]],50,true,11)
Block.setDestroyTime (179,0.25)

// Mining Well Pipe
Block.defineBlock (180,'Mining Well Pipe',[['wool',14]],50,false,11)
Block.setDestroyTime (180,0.25)

// Functions:

function useItem (x,y,z,i,b,s)
{
  if (b == 61 && getTile (x,y+1,z) == 245 && i == 450)
  {
    preventDefault ()
    setTile (x,y,z,174)
    setTile (x,y+1,z,0)
  }
  if (b == 58 && getTile (x,y+1,z) == 245 && i == 450)
  {
    preventDefault ()
    setTile (x,y,z,175)
    setTile (x,y,z,0)
  }
  if (b == 245 && getTile (x,y+1,z) == 4 && i == 450)
  {
    preventDefault ()
    setTile (x,y,z,176)
    setTile (x,y+1,z,0)
  }
  if (b == 173 && getTile (x,y+1,z) == 173 && i == 450)
  {
    preventDefault ()
    setTile (x,y,z,177)
    setTile (x,y+1,z,0)
  }
  if (b == 5 && getTile (x,y+1,z) == 5 && i == 450)
  {
    preventDefault ()
    setTile (x,y,z,178)
    setTile (x,y+1,z,0)
  }
  if (b == 4 && getTile (x,y+1,z) == 4 && i == 450)
  {
    preventDefault ()
    setTile (x,y,z,179)
    setTile (x,y+1,z,0)
  }
}  

// Commands:

// Give
function procCmd (c) {
    var p = c.split(" ")
    var command = p[0]
    switch(command) {
        case 'give': {
            if(p[1] > 0) {
                Entity.setCarriedItem(getPlayerEnt(),p[1],1,p[2])
            }
        }
    }
}	
