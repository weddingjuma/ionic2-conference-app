/**
 * @author    Damien Dell'Amico <damien.dellamico@gmail.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

export class AuthEvents {
  public static get USER_SIGNUP(): string {
    return 'user:signup';
  }

  public static get USER_UNAUTHORIZED(): string {
    return 'user:unauthorized';
  }
}
