import Model from '../model';
import { IOrder } from '../types/order';

/**
 * The `order` model
 */
export default class Order extends Model implements IOrder {
  public static resourcePrefix = 'ord_';

  public resource = 'order';
  public id = null;
  public amount = null;
  public profileId = null;
  public createdAt = null;
  public method = null;
  public mode = null;
  public amountCaptured = null;
  public amountRefunded = null;
  public status = null;
  public isCancelable = null;
  public billingAddress = null;
  public orderNumber = null;
  public shippingAddress = null;
  public locale = null;
  public metadata = null;
  public redirectUrl = null;
  public lines = null;
  public _links = {
    self: null,
    documentation: null,
    payment: null,
    settlement: null,
  };

  /**
   * Order constructor
   *
   * @public ✓ This method is part of the public API
   */
  constructor(props?: Partial<IOrder>) {
    super(props);

    Object.assign(this, props);
  }
}