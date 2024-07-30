
export type Params ={
    params: { id: string };
  };

export interface Snake {
      Id: number;
      Img: string;
      MMName: string;
      EngName: string;
      Detail: string;
      IsPoison: boolean | string;
      IsDanger: boolean | string;
  }

  export interface SnakeCard {
    Id: number;
    EngName:String,
    Img: string;
  }

  export type CardProps = {
    snakes: SnakeCard[];
  };

  export interface SingleCardProps {
    snake: SnakeCard;
  }

  interface FilterCard {
    Id:number,
    Detail:string
    Img: string;
  }

  export type SingleFilter ={
    snake:FilterCard[]
  }
  
   