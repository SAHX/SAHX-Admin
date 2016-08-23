/**
 * Created by tangjiang on 15/7/16.
 */

'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        //  api(this);
        return this.display()
    }

}