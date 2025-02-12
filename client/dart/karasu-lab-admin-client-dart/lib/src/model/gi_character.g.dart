// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'gi_character.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$GICharacter extends GICharacter {
  @override
  final String id;
  @override
  final String name;
  @override
  final String? description;
  @override
  final String iconUrl;
  @override
  final String? element;
  @override
  final num? rarity;
  @override
  final String? headerImgUrl;
  @override
  final String? weaponType;
  @override
  final String? property;
  @override
  final bool uninplemented;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final String? implementedDate;
  @override
  final Country? region;
  @override
  final Weapon? weapon;
  @override
  final VersionsEntity? version;
  @override
  final BuiltList<ArtifactSets>? artifactSet;
  @override
  final BuiltList<Gallery>? galleries;

  factory _$GICharacter([void Function(GICharacterBuilder)? updates]) =>
      (new GICharacterBuilder()..update(updates))._build();

  _$GICharacter._(
      {required this.id,
      required this.name,
      this.description,
      required this.iconUrl,
      this.element,
      this.rarity,
      this.headerImgUrl,
      this.weaponType,
      this.property,
      required this.uninplemented,
      required this.createdAt,
      required this.updatedAt,
      this.implementedDate,
      this.region,
      this.weapon,
      this.version,
      this.artifactSet,
      this.galleries})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'GICharacter', 'id');
    BuiltValueNullFieldError.checkNotNull(name, r'GICharacter', 'name');
    BuiltValueNullFieldError.checkNotNull(iconUrl, r'GICharacter', 'iconUrl');
    BuiltValueNullFieldError.checkNotNull(
        uninplemented, r'GICharacter', 'uninplemented');
    BuiltValueNullFieldError.checkNotNull(
        createdAt, r'GICharacter', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(
        updatedAt, r'GICharacter', 'updatedAt');
  }

  @override
  GICharacter rebuild(void Function(GICharacterBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GICharacterBuilder toBuilder() => new GICharacterBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GICharacter &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        element == other.element &&
        rarity == other.rarity &&
        headerImgUrl == other.headerImgUrl &&
        weaponType == other.weaponType &&
        property == other.property &&
        uninplemented == other.uninplemented &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt &&
        implementedDate == other.implementedDate &&
        region == other.region &&
        weapon == other.weapon &&
        version == other.version &&
        artifactSet == other.artifactSet &&
        galleries == other.galleries;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, element.hashCode);
    _$hash = $jc(_$hash, rarity.hashCode);
    _$hash = $jc(_$hash, headerImgUrl.hashCode);
    _$hash = $jc(_$hash, weaponType.hashCode);
    _$hash = $jc(_$hash, property.hashCode);
    _$hash = $jc(_$hash, uninplemented.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jc(_$hash, implementedDate.hashCode);
    _$hash = $jc(_$hash, region.hashCode);
    _$hash = $jc(_$hash, weapon.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jc(_$hash, artifactSet.hashCode);
    _$hash = $jc(_$hash, galleries.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'GICharacter')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('element', element)
          ..add('rarity', rarity)
          ..add('headerImgUrl', headerImgUrl)
          ..add('weaponType', weaponType)
          ..add('property', property)
          ..add('uninplemented', uninplemented)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt)
          ..add('implementedDate', implementedDate)
          ..add('region', region)
          ..add('weapon', weapon)
          ..add('version', version)
          ..add('artifactSet', artifactSet)
          ..add('galleries', galleries))
        .toString();
  }
}

class GICharacterBuilder implements Builder<GICharacter, GICharacterBuilder> {
  _$GICharacter? _$v;

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

  String? _element;
  String? get element => _$this._element;
  set element(String? element) => _$this._element = element;

  num? _rarity;
  num? get rarity => _$this._rarity;
  set rarity(num? rarity) => _$this._rarity = rarity;

  String? _headerImgUrl;
  String? get headerImgUrl => _$this._headerImgUrl;
  set headerImgUrl(String? headerImgUrl) => _$this._headerImgUrl = headerImgUrl;

  String? _weaponType;
  String? get weaponType => _$this._weaponType;
  set weaponType(String? weaponType) => _$this._weaponType = weaponType;

  String? _property;
  String? get property => _$this._property;
  set property(String? property) => _$this._property = property;

  bool? _uninplemented;
  bool? get uninplemented => _$this._uninplemented;
  set uninplemented(bool? uninplemented) =>
      _$this._uninplemented = uninplemented;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  String? _implementedDate;
  String? get implementedDate => _$this._implementedDate;
  set implementedDate(String? implementedDate) =>
      _$this._implementedDate = implementedDate;

  CountryBuilder? _region;
  CountryBuilder get region => _$this._region ??= new CountryBuilder();
  set region(CountryBuilder? region) => _$this._region = region;

  WeaponBuilder? _weapon;
  WeaponBuilder get weapon => _$this._weapon ??= new WeaponBuilder();
  set weapon(WeaponBuilder? weapon) => _$this._weapon = weapon;

  VersionsEntityBuilder? _version;
  VersionsEntityBuilder get version =>
      _$this._version ??= new VersionsEntityBuilder();
  set version(VersionsEntityBuilder? version) => _$this._version = version;

  ListBuilder<ArtifactSets>? _artifactSet;
  ListBuilder<ArtifactSets> get artifactSet =>
      _$this._artifactSet ??= new ListBuilder<ArtifactSets>();
  set artifactSet(ListBuilder<ArtifactSets>? artifactSet) =>
      _$this._artifactSet = artifactSet;

  ListBuilder<Gallery>? _galleries;
  ListBuilder<Gallery> get galleries =>
      _$this._galleries ??= new ListBuilder<Gallery>();
  set galleries(ListBuilder<Gallery>? galleries) =>
      _$this._galleries = galleries;

  GICharacterBuilder() {
    GICharacter._defaults(this);
  }

  GICharacterBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _element = $v.element;
      _rarity = $v.rarity;
      _headerImgUrl = $v.headerImgUrl;
      _weaponType = $v.weaponType;
      _property = $v.property;
      _uninplemented = $v.uninplemented;
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _implementedDate = $v.implementedDate;
      _region = $v.region?.toBuilder();
      _weapon = $v.weapon?.toBuilder();
      _version = $v.version?.toBuilder();
      _artifactSet = $v.artifactSet?.toBuilder();
      _galleries = $v.galleries?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GICharacter other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$GICharacter;
  }

  @override
  void update(void Function(GICharacterBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  GICharacter build() => _build();

  _$GICharacter _build() {
    _$GICharacter _$result;
    try {
      _$result = _$v ??
          new _$GICharacter._(
              id: BuiltValueNullFieldError.checkNotNull(
                  id, r'GICharacter', 'id'),
              name: BuiltValueNullFieldError.checkNotNull(
                  name, r'GICharacter', 'name'),
              description: description,
              iconUrl: BuiltValueNullFieldError.checkNotNull(
                  iconUrl, r'GICharacter', 'iconUrl'),
              element: element,
              rarity: rarity,
              headerImgUrl: headerImgUrl,
              weaponType: weaponType,
              property: property,
              uninplemented: BuiltValueNullFieldError.checkNotNull(
                  uninplemented, r'GICharacter', 'uninplemented'),
              createdAt: BuiltValueNullFieldError.checkNotNull(
                  createdAt, r'GICharacter', 'createdAt'),
              updatedAt: BuiltValueNullFieldError.checkNotNull(
                  updatedAt, r'GICharacter', 'updatedAt'),
              implementedDate: implementedDate,
              region: _region?.build(),
              weapon: _weapon?.build(),
              version: _version?.build(),
              artifactSet: _artifactSet?.build(),
              galleries: _galleries?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'region';
        _region?.build();
        _$failedField = 'weapon';
        _weapon?.build();
        _$failedField = 'version';
        _version?.build();
        _$failedField = 'artifactSet';
        _artifactSet?.build();
        _$failedField = 'galleries';
        _galleries?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'GICharacter', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
