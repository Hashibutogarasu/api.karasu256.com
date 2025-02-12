// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'countries_controller_update_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CountriesControllerUpdateRequest
    extends CountriesControllerUpdateRequest {
  @override
  final String id;
  @override
  final String? name;
  @override
  final String? description;
  @override
  final String? iconUrl;
  @override
  final String? version;

  factory _$CountriesControllerUpdateRequest(
          [void Function(CountriesControllerUpdateRequestBuilder)? updates]) =>
      (new CountriesControllerUpdateRequestBuilder()..update(updates))._build();

  _$CountriesControllerUpdateRequest._(
      {required this.id,
      this.name,
      this.description,
      this.iconUrl,
      this.version})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        id, r'CountriesControllerUpdateRequest', 'id');
  }

  @override
  CountriesControllerUpdateRequest rebuild(
          void Function(CountriesControllerUpdateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CountriesControllerUpdateRequestBuilder toBuilder() =>
      new CountriesControllerUpdateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is CountriesControllerUpdateRequest &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        version == other.version;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'CountriesControllerUpdateRequest')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('version', version))
        .toString();
  }
}

class CountriesControllerUpdateRequestBuilder
    implements
        Builder<CountriesControllerUpdateRequest,
            CountriesControllerUpdateRequestBuilder> {
  _$CountriesControllerUpdateRequest? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  String? _version;
  String? get version => _$this._version;
  set version(String? version) => _$this._version = version;

  CountriesControllerUpdateRequestBuilder() {
    CountriesControllerUpdateRequest._defaults(this);
  }

  CountriesControllerUpdateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _version = $v.version;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(CountriesControllerUpdateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$CountriesControllerUpdateRequest;
  }

  @override
  void update(void Function(CountriesControllerUpdateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  CountriesControllerUpdateRequest build() => _build();

  _$CountriesControllerUpdateRequest _build() {
    final _$result = _$v ??
        new _$CountriesControllerUpdateRequest._(
            id: BuiltValueNullFieldError.checkNotNull(
                id, r'CountriesControllerUpdateRequest', 'id'),
            name: name,
            description: description,
            iconUrl: iconUrl,
            version: version);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
