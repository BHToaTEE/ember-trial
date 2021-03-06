//I pulled this from the e-light-table ex. NOTE: YOU MUST CHANGE MODEL TO AN ARRAY FOR IT TO FUNCTION PROPERLY. Right now its set to display 10 rows per page and should be continously scrolling as the user scrolls down, more rows should appear. 

import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import Table from 'ember-light-table';
import { task } from 'ember-concurrency';

export default Mixin.create({
  store: service(),

  page: 0,
  limit: 10,
  dir: 'asc',
  sort: 'year',

  isLoading: computed.oneWay('fetchRecords.isRunning'),
  canLoadMore: true,
  enableSync: true,
//you might have to change 'stat' back to 'model'
  model: [],
  meta: null,
  columns: null,
  table: null,

  init() {
    this._super(...arguments);

    let table = new Table(this.get('columns'), this.get('model'), { enableSync: this.get('enableSync') });
    let sortColumn = table.get('allColumns').findBy('valuePath', this.get('sort'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }

    this.set('table', table);
  },

  fetchRecords: task(function*() {
    let records = yield this.get('store').query('stat', this.getProperties(['page', 'limit', 'sort', 'dir']));
    this.get('model').pushObjects(records.toArray());
    this.set('meta', records.get('meta'));
    this.set('canLoadMore', !isEmpty(records));
  }).restartable(),

  actions: {
    onScrolledToBottom() {
      if (this.get('canLoadMore')) {
        this.incrementProperty('page');
        this.get('fetchRecords').perform();
      }
    },

    onColumnClick(column) {
      if (column.sorted) {
        this.setProperties({
          dir: column.ascending ? 'asc' : 'desc',
          sort: column.get('valuePath'),
          canLoadMore: true,
          page: 0
        });
        this.get('model').clear();
      }
    }
  }
});