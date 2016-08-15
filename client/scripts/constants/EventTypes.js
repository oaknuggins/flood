const EVENT_TYPES = {
  AUTH_CREATE_USER_ERROR: 'AUTH_CREATE_USER_ERROR',
  AUTH_CREATE_USER_SUCCESS: 'AUTH_CREATE_USER_SUCCESS',
  AUTH_DELETE_USER_ERROR: 'AUTH_DELETE_USER_ERROR',
  AUTH_DELETE_USER_SUCCESS: 'AUTH_DELETE_USER_SUCCESS',
  AUTH_LIST_USERS_ERROR: 'AUTH_LIST_USERS_ERROR',
  AUTH_LIST_USERS_SUCCESS: 'AUTH_LIST_USERS_SUCCESS',
  AUTH_LOGIN_ERROR: 'AUTH_LOGIN_ERROR',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_REGISTER_ERROR: 'AUTH_REGISTER_ERROR',
  AUTH_REGISTER_SUCCESS: 'AUTH_REGISTER_SUCCESS',
  AUTH_VERIFY_ERROR: 'AUTH_VERIFY_ERROR',
  AUTH_VERIFY_SUCCESS: 'AUTH_VERIFY_SUCCESS',
  CLIENT_ADD_TORRENT_ERROR: 'CLIENT_ADD_TORRENT_ERROR',
  CLIENT_ADD_TORRENT_SUCCESS: 'CLIENT_ADD_TORRENT_SUCCESS',
  CLIENT_FETCH_TORRENT_TAXONOMY_ERROR: 'CLIENT_FETCH_TORRENT_TAXONOMY_ERROR',
  CLIENT_FETCH_TORRENT_TAXONOMY_SUCCESS: 'CLIENT_FETCH_TORRENT_TAXONOMY_SUCCESS',
  CLIENT_SET_THROTTLE_ERROR: 'CLIENT_SET_THROTTLE_ERROR',
  CLIENT_SET_THROTTLE_SUCCESS: 'CLIENT_SET_THROTTLE_SUCCESS',
  CLIENT_MOVE_TORRENTS_REQUEST_ERROR: 'CLIENT_MOVE_TORRENTS_REQUEST_ERROR',
  CLIENT_MOVE_TORRENTS_SUCCESS: 'CLIENT_MOVE_TORRENTS_SUCCESS',
  CLIENT_SETTINGS_FETCH_REQUEST_ERROR: 'CLIENT_SETTINGS_FETCH_REQUEST_ERROR',
  CLIENT_SETTINGS_FETCH_REQUEST_SUCCESS: 'CLIENT_SETTINGS_FETCH_REQUEST_SUCCESS',
  CLIENT_SETTINGS_SAVE_REQUEST_ERROR: 'CLIENT_SETTINGS_SAVE_REQUEST_ERROR',
  CLIENT_SETTINGS_SAVE_REQUEST_SUCCESS: 'CLIENT_SETTINGS_SAVE_REQUEST_SUCCESS',
  CLIENT_TORRENTS_REQUEST_ERROR: 'CLIENT_TORRENTS_REQUEST_ERROR',
  CLIENT_TORRENT_STATUS_COUNT_CHANGE: 'CLIENT_TORRENT_STATUS_COUNT_CHANGE',
  CLIENT_TORRENT_STATUS_COUNT_REQUEST_ERROR: 'CLIENT_TORRENT_STATUS_COUNT_REQUEST_ERROR',
  CLIENT_TORRENT_TRACKER_COUNT_CHANGE: 'CLIENT_TORRENT_TRACKER_COUNT_CHANGE',
  CLIENT_TORRENT_TRACKER_COUNT_REQUEST_ERROR: 'CLIENT_TORRENT_TRACKER_COUNT_REQUEST_ERROR',
  CLIENT_TORRENTS_REQUEST_SUCCESS: 'CLIENT_TORRENTS_REQUEST_SUCCESS',
  CLIENT_TORRENT_DETAILS_CHANGE: 'CLIENT_TORRENT_DETAILS_CHANGE',
  CLIENT_TRANSFER_DATA_REQUEST_SUCCESS: 'CLIENT_TRANSFER_DATA_REQUEST_SUCCESS',
  CLIENT_TRANSFER_DATA_REQUEST_ERROR: 'CLIENT_TRANSFER_DATA_REQUEST_ERROR',
  CLIENT_TRANSFER_HISTORY_REQUEST_SUCCESS: 'CLIENT_TRANSFER_HISTORY_REQUEST_SUCCESS',
  CLIENT_TRANSFER_HISTORY_REQUEST_ERROR: 'CLIENT_TRANSFER_HISTORY_REQUEST_ERROR',
  NOTIFICATIONS_CHANGE: 'NOTIFICATIONS_CHANGE',
  SETTINGS_CHANGE: 'SETTINGS_CHANGE',
  SETTINGS_SAVE_REQUEST_ERROR: 'SETTINGS_SAVE_REQUEST_ERROR',
  SETTINGS_SAVE_REQUEST_SUCCESS: 'SETTINGS_SAVE_REQUEST_SUCCESS',
  SETTINGS_FEED_MONITOR_FEED_ADD_ERROR: 'SETTINGS_FEED_MONITOR_FEED_ADD_ERROR',
  SETTINGS_FEED_MONITOR_FEED_ADD_SUCCESS: 'SETTINGS_FEED_MONITOR_FEED_ADD_SUCCESS',
  SETTINGS_FEED_MONITOR_RULE_ADD_ERROR: 'SETTINGS_FEED_MONITOR_RULE_ADD_ERROR',
  SETTINGS_FEED_MONITOR_RULE_ADD_SUCCESS: 'SETTINGS_FEED_MONITOR_RULE_ADD_SUCCESS',
  SETTINGS_FEED_MONITOR_REMOVE_ERROR: 'SETTINGS_FEED_MONITOR_REMOVE_ERROR',
  SETTINGS_FEED_MONITOR_REMOVE_SUCCESS: 'SETTINGS_FEED_MONITOR_REMOVE_SUCCESS',
  SETTINGS_FEED_MONITORS_FETCH_ERROR: 'SETTINGS_FEED_MONITORS_FETCH_ERROR',
  SETTINGS_FEED_MONITORS_FETCH_SUCCESS: 'SETTINGS_FEED_MONITORS_FETCH_SUCCESS',
  SETTINGS_FETCH_REQUEST_ERROR: 'SETTINGS_FETCH_REQUEST_ERROR',
  SETTINGS_FETCH_REQUEST_SUCCESS: 'SETTINGS_FETCH_REQUEST_SUCCESS',
  UI_CONTEXT_MENU_CHANGE: 'UI_CONTEXT_MENU_CHANGE',
  UI_DEPENDENCIES_LOADED: 'UI_DEPENDENCIES_LOADED',
  UI_DROPDOWN_MENU_CHANGE: 'UI_DROPDOWN_MENU_CHANGE',
  UI_MODAL_CHANGE: 'UI_MODAL_CHANGE',
  UI_LATEST_TORRENT_LOCATION_CHANGE: 'UI_LATEST_TORRENT_LOCATION_CHANGE',
  UI_TORRENT_DETAILS_HASH_CHANGE: 'UI_TORRENT_DETAILS_HASH_CHANGE',
  UI_TORRENT_DETAILS_OPEN_CHANGE: 'UI_TORRENT_DETAILS_OPEN_CHANGE',
  UI_TORRENT_SELECTION_CHANGE: 'UI_TORRENT_SELECTION_CHANGE',
  UI_TORRENTS_FILTER_CHANGE: 'UI_TORRENTS_FILTER_CHANGE',
  UI_TORRENTS_FILTER_STATUS_CHANGE: 'UI_TORRENTS_FILTER_STATUS_CHANGE',
  UI_TORRENTS_FILTER_TAG_CHANGE: 'UI_TORRENTS_FILTER_TAG_CHANGE',
  UI_TORRENTS_FILTER_TRACKER_CHANGE: 'UI_TORRENTS_FILTER_TRACKER_CHANGE',
  UI_TORRENTS_FILTER_SEARCH_CHANGE: 'UI_TORRENTS_FILTER_SEARCH_CHANGE',
  UI_TORRENTS_LIST_FILTERED: 'UI_TORRENTS_LIST_FILTERED',
  UI_TORRENTS_SORT_CHANGE: 'UI_TORRENTS_SORT_CHANGE'
};

export default EVENT_TYPES;
