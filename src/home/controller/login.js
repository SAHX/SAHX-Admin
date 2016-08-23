/**
 * Created by tangjiang on 16/7/16.
 */

'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        return this.display()
    }
}
