// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'update_character_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$UpdateCharacterRequest extends UpdateCharacterRequest {
  @override
  final String id;
  @override
  final String? name;
  @override
  final String? description;
  @override
  final String? iconUrl;
  @override
  final String? headerImgUrl;
  @override
  final String? element;
  @override
  final String? region;
  @override
  final String? weaponType;
  @override
  final int? rarity;
  @override
  final String? property;
  @override
  final String? version;
  @override
  final bool? unimplemented;

  factory _$UpdateCharacterRequest(
          [void Function(UpdateCharacterRequestBuilder)? updates]) =>
      (new UpdateCharacterRequestBuilder()..update(updates))._build();

  _$UpdateCharacterRequest._(
      {required this.id,
      this.name,
      this.description,
      this.iconUrl,
      this.headerImgUrl,
      this.element,
      this.region,
      this.weaponType,
      this.rarity,
      this.property,
      this.version,
      this.unimplemented})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'UpdateCharacterRequest', 'id');
  }

  @override
  UpdateCharacterRequest rebuild(
          void Function(UpdateCharacterRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  UpdateCharacterRequestBuilder toBuilder() =>
      new UpdateCharacterRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is UpdateCharacterRequest &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        headerImgUrl == other.headerImgUrl &&
        element == other.element &&
        region == other.region &&
        weaponType == other.weaponType &&
        rarity == other.rarity &&
        property == other.property &&
        version == other.version &&
        unimplemented == other.unimplemented;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, headerImgUrl.hashCode);
    _$hash = $jc(_$hash, element.hashCode);
    _$hash = $jc(_$hash, region.hashCode);
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
    return (newBuiltValueToStringHelper(r'UpdateCharacterRequest')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('headerImgUrl', headerImgUrl)
          ..add('element', element)
          ..add('region', region)
          ..add('weaponType', weaponType)
          ..add('rarity', rarity)
          ..add('property', property)
          ..add('version', version)
          ..add('unimplemented', unimplemented))
        .toString();
  }
}

class UpdateCharacterRequestBuilder
    implements Builder<UpdateCharacterRequest, UpdateCharacterRequestBuilder> {
  _$UpdateCharacterRequest? _$v;

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

  String? _headerImgUrl;
  String? get headerImgUrl => _$this._headerImgUrl;
  set headerImgUrl(String? headerImgUrl) => _$this._headerImgUrl = headerImgUrl;

  String? _element;
  String? get element => _$this._element;
  set element(String? element) => _$this._element = element;

  String? _region;
  String? get region => _$this._region;
  set region(String? region) => _$this._region = region;

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

  UpdateCharacterRequestBuilder() {
    UpdateCharacterRequest._defaults(this);
  }

  UpdateCharacterRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _headerImgUrl = $v.headerImgUrl;
      _element = $v.element;
      _region = $v.region;
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
  void replace(UpdateCharacterRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$UpdateCharacterRequest;
  }

  @override
  void update(void Function(UpdateCharacterRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  UpdateCharacterRequest build() => _build();

  _$UpdateCharacterRequest _build() {
    final _$result = _$v ??
        new _$UpdateCharacterRequest._(
            id: BuiltValueNullFieldError.checkNotNull(
                id, r'UpdateCharacterRequest', 'id'),
            name: name,
            description: description,
            iconUrl: iconUrl,
            headerImgUrl: headerImgUrl,
            element: element,
            region: region,
            weaponType: weaponType,
            rarity: rarity,
            property: property,
            version: version,
            unimplemented: unimplemented);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
