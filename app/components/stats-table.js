//this is important the "statsTable" mixin. Side note: When you "ember g" something using camelCase, it automatically hyphenates the file, but the file needs to be called using the name used to generate it. EX: below the file called is "..mixins/stats-table", but it's being imported from "statsTable", which is the name i gave the file when i generated it via the node. There is extensive documentation on e-light-table with numerous, so I think it will work well for our purposes. See Mixin/stats-table.


import Component from '@ember/component';
import statsTable from '../mixins/stats-table';
import { computed } from '@ember/object';

export default Component.extend(statsTable, {
 columns: Ember.computed(function() {
    return [{
      label: 'Year',
      valuePath: 'year',
      width: '80px',
    }, {
      label: 'Team',
      valuePath: 'team',
      width: '150px',
    }, {
      label: 'Games Played',
      valuePath: 'gamesPlayed',
      width: '150px'
    }, {
      label: 'Record',
      valuePath: 'record',
      width: '150px'
    }, {
      label: 'Home Record',
      valuePath: 'homeRecord',
    width: '80px'
    }, {
     label: 'Away Record',
      valuePath: 'awayRecord',
    width: '80px'
    }];
  })

  });