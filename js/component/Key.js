import create from './../create';

export default  class Key{
    constructor({small,shift,code}){
        this.code=code;
        this.small=small;
        this.shift=shift;
        this.isFnKey = Boolean(small.match(/Ctrl|arr|Alt|Shift|Tab|Caps|Enter|Win|Back/));

        if(shift&&shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)){
            this.sub=create('div', 'sub', this.small)
        }else{
            this.sub=create('div','sub','')
        }

        this.letter = create('div', 'latter', this.small);
        rhis.div = create('div', 'keybord-key', [this.small, this.letter], null,['code',this.code])
    }

}
