// Build Craft 0.8.1

// Made by Crazy4Redstone

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
Block.defineBlock (176,'Builder',[['stonecutter',0]],50,false,0)
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
