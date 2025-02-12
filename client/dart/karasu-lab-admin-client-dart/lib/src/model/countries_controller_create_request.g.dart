// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'countries_controller_create_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CountriesControllerCreateRequest
    extends CountriesControllerCreateRequest {
  @override
  final String name;
  @override
  final String? description;
  @override
  final String? iconUrl;
  @override
  final String? sumbnailUrl;
  @override
  final String version;

  factory _$CountriesControllerCreateRequest(
          [void Function(CountriesControllerCreateRequestBuilder)? updates]) =>
      (new CountriesControllerCreateRequestBuilder()..update(updates))._build();

  _$CountriesControllerCreateRequest._(
      {required this.name,
      this.description,
      this.iconUrl,
      this.sumbnailUrl,
      required this.version})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        name, r'CountriesControllerCreateRequest', 'name');
    BuiltValueNullFieldError.checkNotNull(
        version, r'CountriesControllerCreateRequest', 'version');
  }

  @override
  CountriesControllerCreateRequest rebuild(
          void Function(CountriesControllerCreateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CountriesControllerCreateRequestBuilder toBuilder() =>
      new CountriesControllerCreateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is CountriesControllerCreateRequest &&
        name == other.name &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        sumbnailUrl == other.sumbnailUrl &&
        version == other.version;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, sumbnailUrl.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'CountriesControllerCreateRequest')
          ..add('name', name)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('sumbnailUrl', sumbnailUrl)
          ..add('version', version))
        .toString();
  }
}

class CountriesControllerCreateRequestBuilder
    implements
        Builder<CountriesControllerCreateRequest,
            CountriesControllerCreateRequestBuilder> {
  _$CountriesControllerCreateRequest? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  String? _sumbnailUrl;
  String? get sumbnailUrl => _$this._sumbnailUrl;
  set sumbnailUrl(String? sumbnailUrl) => _$this._sumbnailUrl = sumbnailUrl;

  String? _version;
  String? get version => _$this._version;
  set version(String? version) => _$this._version = version;

  CountriesControllerCreateRequestBuilder() {
    CountriesControllerCreateRequest._defaults(this);
  }

  CountriesControllerCreateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _sumbnailUrl = $v.sumbnailUrl;
      _version = $v.version;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(CountriesControllerCreateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$CountriesControllerCreateRequest;
  }

  @override
  void update(void Function(CountriesControllerCreateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  CountriesControllerCreateRequest build() => _build();

  _$CountriesControllerCreateRequest _build() {
    final _$result = _$v ??
        new _$CountriesControllerCreateRequest._(
            name: BuiltValueNullFieldError.checkNotNull(
                name, r'CountriesControllerCreateRequest', 'name'),
            description: description,
            iconUrl: iconUrl,
            sumbnailUrl: sumbnailUrl,
            version: BuiltValueNullFieldError.checkNotNull(
                version, r'CountriesControllerCreateRequest', 'version'));
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
