import PointsModel from './model/points-model.js';
import FilterModel from './model/filters-model.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

const headerContainer = document.querySelector('.trip-main');
const eventsContainer = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();
const filtersModel = new FilterModel();

const boardPresenter = new BoardPresenter({
  headerContainer,
  eventsContainer,
  pointsModel,
  filtersModel,
});

const filterPresenter = new FilterPresenter({
  filtersContainer,
  filtersModel,
  pointsModel,
});

boardPresenter.init();
filterPresenter.init();
