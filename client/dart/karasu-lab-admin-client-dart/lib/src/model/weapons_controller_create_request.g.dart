// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'weapons_controller_create_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$WeaponsControllerCreateRequest extends WeaponsControllerCreateRequest {
  @override
  final String name;
  @override
  final String? description;
  @override
  final String? iconUrl;
  @override
  final String type;
  @override
  final int rarity;
  @override
  final String? effect;
  @override
  final String version;

  factory _$WeaponsControllerCreateRequest(
          [void Function(WeaponsControllerCreateRequestBuilder)? updates]) =>
      (new WeaponsControllerCreateRequestBuilder()..update(updates))._build();

  _$WeaponsControllerCreateRequest._(
      {required this.name,
      this.description,
      this.iconUrl,
      required this.type,
      required this.rarity,
      this.effect,
      required this.version})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        name, r'WeaponsControllerCreateRequest', 'name');
    BuiltValueNullFieldError.checkNotNull(
        type, r'WeaponsControllerCreateRequest', 'type');
    BuiltValueNullFieldError.checkNotNull(
        rarity, r'WeaponsControllerCreateRequest', 'rarity');
    BuiltValueNullFieldError.checkNotNull(
        version, r'WeaponsControllerCreateRequest', 'version');
  }

  @override
  WeaponsControllerCreateRequest rebuild(
          void Function(WeaponsControllerCreateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  WeaponsControllerCreateRequestBuilder toBuilder() =>
      new WeaponsControllerCreateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is WeaponsControllerCreateRequest &&
        name == other.name &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        type == other.type &&
        rarity == other.rarity &&
        effect == other.effect &&
        version == other.version;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, rarity.hashCode);
    _$hash = $jc(_$hash, effect.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'WeaponsControllerCreateRequest')
          ..add('name', name)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('type', type)
          ..add('rarity', rarity)
          ..add('effect', effect)
          ..add('version', version))
        .toString();
  }
}

class WeaponsControllerCreateRequestBuilder
    implements
        Builder<WeaponsControllerCreateRequest,
            WeaponsControllerCreateRequestBuilder> {
  _$WeaponsControllerCreateRequest? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  String? _type;
  String? get type => _$this._type;
  set type(String? type) => _$this._type = type;

  int? _rarity;
  int? get rarity => _$this._rarity;
  set rarity(int? rarity) => _$this._rarity = rarity;

  String? _effect;
  String? get effect => _$this._effect;
  set effect(String? effect) => _$this._effect = effect;

  String? _version;
  String? get version => _$this._version;
  set version(String? version) => _$this._version = version;

  WeaponsControllerCreateRequestBuilder() {
    WeaponsControllerCreateRequest._defaults(this);
  }

  WeaponsControllerCreateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _type = $v.type;
      _rarity = $v.rarity;
      _effect = $v.effect;
      _version = $v.version;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(WeaponsControllerCreateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$WeaponsControllerCreateRequest;
  }

  @override
  void update(void Function(WeaponsControllerCreateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  WeaponsControllerCreateRequest build() => _build();

  _$WeaponsControllerCreateRequest _build() {
    final _$result = _$v ??
        new _$WeaponsControllerCreateRequest._(
            name: BuiltValueNullFieldError.checkNotNull(
                name, r'WeaponsControllerCreateRequest', 'name'),
            description: description,
            iconUrl: iconUrl,
            type: BuiltValueNullFieldError.checkNotNull(
                type, r'WeaponsControllerCreateRequest', 'type'),
            rarity: BuiltValueNullFieldError.checkNotNull(
                rarity, r'WeaponsControllerCreateRequest', 'rarity'),
            effect: effect,
            version: BuiltValueNullFieldError.checkNotNull(
                version, r'WeaponsControllerCreateRequest', 'version'));
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
