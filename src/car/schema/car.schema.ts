import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CoverType } from 'src/common/enum/cover.enum';

@Schema()
class PremiumDetails {
  @Prop({ type: Number, required: true })
  basedPrice: number;
  @Prop({ type: Number, required: true })
  carPriceMultiplier: number;
}

const PremiumDetailsSchema = SchemaFactory.createForClass(PremiumDetails);

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ type: String, required: true, unique: true })
  brand: string;

  @Prop({ type: Map, of: PremiumDetailsSchema, required: true })
  coverOptions: { [coverType in CoverType]: PremiumDetails };
}

export const CarSchema = SchemaFactory.createForClass(Car);
