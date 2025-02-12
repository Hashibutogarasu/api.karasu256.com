// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'create_character_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CreateCharacterRequest extends CreateCharacterRequest {
  @override
  final String name;
  @override
  final String? description;
  @override
  final String? iconUrl;
  @override
  final String element;
  @override
  final String region;
  @override
  final String? weapon;
  @override
  final String? headerImgUrl;
  @override
  final BuiltList<String>? artifactSet;
  @override
  final String? weaponType;
  @override
  final int? rarity;
  @override
  final String? property;
  @override
  final String version;
  @override
  final bool? unimplemented;

  factory _$CreateCharacterRequest(
          [void Function(CreateCharacterRequestBuilder)? updates]) =>
      (new CreateCharacterRequestBuilder()..update(updates))._build();

  _$CreateCharacterRequest._(
      {required this.name,
      this.description,
      this.iconUrl,
      required this.element,
      required this.region,
      this.weapon,
      this.headerImgUrl,
      this.artifactSet,
      this.weaponType,
      this.rarity,
      this.property,
      required this.version,
      this.unimplemented})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        name, r'CreateCharacterRequest', 'name');
    BuiltValueNullFieldError.checkNotNull(
        element, r'CreateCharacterRequest', 'element');
    BuiltValueNullFieldError.checkNotNull(
        region, r'CreateCharacterRequest', 'region');
    BuiltValueNullFieldError.checkNotNull(
        version, r'CreateCharacterRequest', 'version');
  }

  @override
  CreateCharacterRequest rebuild(
          void Function(CreateCharacterRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CreateCharacterRequestBuilder toBuilder() =>
      new CreateCharacterRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is CreateCharacterRequest &&
        name == other.name &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        element == other.element &&
        region == other.region &&
        weapon == other.weapon &&
        headerImgUrl == other.headerImgUrl &&
        artifactSet == other.artifactSet &&
        weaponType == other.weaponType &&
        rarity == other.rarity &&
        property == other.property &&
        version == other.version &&
        unimplemented == other.unimplemented;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, element.hashCode);
    _$hash = $jc(_$hash, region.hashCode);
    _$hash = $jc(_$hash, weapon.hashCode);
    _$hash = $jc(_$hash, headerImgUrl.hashCode);
    _$hash = $jc(_$hash, artifactSet.hashCode);
    _$hash = $jc(_$hash, weaponType.hashCode);
    _$hash = $jc(_$hash, rarity.hashCode);
    _$hash = $jc(_$hash, property.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jc(_$hash, unimplemented.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'CreateCharacterRequest')
          ..add('name', name)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('element', element)
          ..add('region', region)
          ..add('weapon', weapon)
          ..add('headerImgUrl', headerImgUrl)
          ..add('artifactSet', artifactSet)
          ..add('weaponType', weaponType)
          ..add('rarity', rarity)
          ..add('property', property)
          ..add('version', version)
          ..add('unimplemented', unimplemented))
        .toString();
  }
}

class CreateCharacterRequestBuilder
    implements Builder<CreateCharacterRequest, CreateCharacterRequestBuilder> {
  _$CreateCharacterRequest? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  String? _element;
  String? get element => _$this._element;
  set element(String? element) => _$this._element = element;

  String? _region;
  String? get region => _$this._region;
  set region(String? region) => _$this._region = region;

  String? _weapon;
  String? get weapon => _$this._weapon;
  set weapon(String? weapon) => _$this._weapon = weapon;

  String? _headerImgUrl;
  String? get headerImgUrl => _$this._headerImgUrl;
  set headerImgUrl(String? headerImgUrl) => _$this._headerImgUrl = headerImgUrl;

  ListBuilder<String>? _artifactSet;
  ListBuilder<String> get artifactSet =>
      _$this._artifactSet ??= new ListBuilder<String>();
  set artifactSet(ListBuilder<String>? artifactSet) =>
      _$this._artifactSet = artifactSet;

  String? _weaponType;
  String? get weaponType => _$this._weaponType;
  set weaponType(String? weaponType) => _$this._weaponType = weaponType;

  int? _rarity;
  int? get rarity => _$this._rarity;
  set rarity(int? rarity) => _$this._rarity = rarity;

  String? _property;
  String? get property => _$this._property;
  set property(String? property) => _$this._property = property;

  String? _version;
  String? get version => _$this._version;
  set version(String? version) => _$this._version = version;

  bool? _unimplemented;
  bool? get unimplemented => _$this._unimplemented;
  set unimplemented(bool? unimplemented) =>
      _$this._unimplemented = unimplemented;

  CreateCharacterRequestBuilder() {
    CreateCharacterRequest._defaults(this);
  }

  CreateCharacterRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _element = $v.element;
      _region = $v.region;
      _weapon = $v.weapon;
      _headerImgUrl = $v.headerImgUrl;
      _artifactSet = $v.artifactSet?.toBuilder();
      _weaponType = $v.weaponType;
      _rarity = $v.rarity;
      _property = $v.property;
      _version = $v.version;
      _unimplemented = $v.unimplemented;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(CreateCharacterRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$CreateCharacterRequest;
  }

  @override
  void update(void Function(CreateCharacterRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  CreateCharacterRequest build() => _build();

  _$CreateCharacterRequest _build() {
    _$CreateCharacterRequest _$result;
    try {
      _$result = _$v ??
          new _$CreateCharacterRequest._(
              name: BuiltValueNullFieldError.checkNotNull(
                  name, r'CreateCharacterRequest', 'name'),
              description: description,
              iconUrl: iconUrl,
              element: BuiltValueNullFieldError.checkNotNull(
                  element, r'CreateCharacterRequest', 'element'),
              region: BuiltValueNullFieldError.checkNotNull(
                  region, r'CreateCharacterRequest', 'region'),
              weapon: weapon,
              headerImgUrl: headerImgUrl,
              artifactSet: _artifactSet?.build(),
              weaponType: weaponType,
              rarity: rarity,
              property: property,
              version: BuiltValueNullFieldError.checkNotNull(
                  version, r'CreateCharacterRequest', 'version'),
              unimplemented: unimplemented);
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'artifactSet';
        _artifactSet?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'CreateCharacterRequest', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
